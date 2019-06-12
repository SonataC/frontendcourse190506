var CLASS_ROUND = 'round';

var bool = false;
function color(event, _this) {
    event.preventDefault();
    if (!bool) {
        _this.classList.add(CLASS_ROUND);
        bool = true;
    } else {
        _this.classList.remove(CLASS_ROUND);
        bool = false;
    }
    return false;
}