function catMouse(x, j) {
    const catIndex = x.indexOf('C');
    const mouseIndex = x.indexOf('m');
    const dogIndex = x.indexOf('D');

    if (catIndex === -1 || mouseIndex === -1 || dogIndex === -1) {
        return 'boring without all three';
    }

    const distance = Math.abs(catIndex - mouseIndex);

    if (distance <= j) {
        if (dogIndex === -1 || Math.abs(catIndex - dogIndex) > j || Math.abs(mouseIndex - dogIndex) > j) {
            return 'Caught!';
        } else {
            return 'Protected!';
        }
    } else {
        return 'Escaped!';
    }
}
