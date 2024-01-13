function poolgame(table,momentum) {
  
  const Sx=table.length, Sy=table[0].length;
  
  const find=(table,target)=>{
    for(let x=0;x<Sx;x++) for(let y=0;y<Sy;y++) if(table[x][y]==target) return [x,y];
  }
  
  let [x,y] = find(table, 'R');
  const [X,Y] = find(table, 'W');
  const ax = Math.abs(x-X), ay = Math.abs(y-Y);
  
  if(x!=X && y!=Y && ax!=ay) return false
  
  const toD =v=> v/Math.abs(v||1);
  const bounce =(z,dz,S)=> z+dz<0 || z+dz>=S ? -dz:dz;
  
  let speed = momentum - Math.max(ax,ay);
  let dx = toD(x-X), dy = toD(y-Y);
  
  while(speed>0 && table[x][y]!='O'){
    dx = bounce(x,dx,Sx);
    dy = bounce(y,dy,Sy);
    x+=dx; y+=dy; speed--;
  }
  return table[x][y]=='O'
}
