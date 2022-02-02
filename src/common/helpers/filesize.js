const humanFileSize = (size) => {
    var i = Math.floor( Math.log(size) / Math.log(1024) );
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['kB', 'MB', 'GB', 'TB', 'PB'][i];
}

export default humanFileSize