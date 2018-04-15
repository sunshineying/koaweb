/*
 * PraiseButton
 * @class
 */


class PraiseButton {
    constructor(initCount = 0) {
        this.PraiseCount = initCount;
    }

    addCount() {
        this.PraiseCount += 1;
        this.changeCount(this.PraiseCount);
    }

    changeCount() {}

}


export default PraiseButton;