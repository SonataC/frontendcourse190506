var click = 0;
function color(_this) {
    if (click === 0) {
        _this.style.backgroundColor = "green";
        _this.style.borderRadius = '50%';
        _this.style.transition = '1s';
        return click += 1;
    } else if (click === 1) {
        _this.style.backgroundColor = "red";
        _this.style.borderRadius = '0';
        return click -= 1;
    }

}