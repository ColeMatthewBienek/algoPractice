function styleHyphenFormat(propertyName) {
    function upperToHyphenLower(ma, off, string) {
        return (off > 0 ? '-' : '') + ma.toLowerCase();
    }
    return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

console.log(styleHyphenFormat('borderTop!'))