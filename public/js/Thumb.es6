import PraiseButton from "./PraiseButton.js";

/*
 * Thumb
 * @class
 */

let f = '';

class Thumb extends PraiseButton {
    constructor(selector = {}) {
        super();

        this.praiseBox = selector.praiseNode;

        this.node = $(this.praiseBox);

        this.addNode = `<div class="priase-count">当前点赞次数：<span>${this.PraiseCount}</span></div>`;

        this.node.prepend(this.addNode);

        this.showCountNode = this.node.find('.priase-count span');

    }
    
    
    handlePraise() {
        if(!this.praiseBox) return;
        this.praiseBox.onclick = () => {
            if(f) {
                clearTimeout(f);
            }
            f = setTimeout(() => {
                this.addCount();
                axios.get('/index/update')
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }, 800);
        }
    }

    changeCount() {
        this.showCountNode.text(this.PraiseCount);
    }
}

export default Thumb;