//(function () {
//    var dragDrop = {
//        item: null,
//        itemId: null,
//        itemClick: function (item) {
//
//            item.addEventListener('click', function () {
//                if (dragDrop.item == null) {
//                    item.parentNode.removeChild(item);
//                    dragDrop.item = '<img src="'+item.src+'" draggable="true" ondragstart="drag(event)" class="dragitem" id="'+item.id+'" width="328" height="305">';
//                    dragDrop.itemId = item.id;
//                }
//            });
//
//        },
//        
//        frameClick: function(frame){
//            
//            frame.addEventListener('click', function(event){
//                if (frame !== event.target) {
//                    return;
//                }
//                if(dragDrop.item != null){
//                    frame.innerHTML += dragDrop.item;
//                    dragDrop.itemClick(document.getElementById(dragDrop.itemId));
//                    dragDrop.item = null;
//                    dragDrop.itemId = null;
//                }
//            }, false);
//        }
//        
//    }
//
//    var items = document.querySelectorAll(".dragitem")
//
//    for(i = 0; i < items.length; i++){
//        dragDrop.itemClick(items[i]);
//    }
//    
//    var frames = document.querySelectorAll("section");    
//    
//    for(i = 0; i < frames.length; i++){
//        dragDrop.frameClick(frames[i]);
//    }
//    
//})();
(function () {
    document.getElementById('right').style = "";
    document.getElementById('midsection').style = "";
})();

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    var something = false;
    if ("files" in DataTransfer.prototype && something == true) {
        ev.dataTransfer.setData("text", ev.target.id);
        var parent = document.getElementById(ev.target.id).parentNode;

        if (parent.id == 'right') {
            parent.className = 'right-frame frame selected';
            document.getElementById('left').className = 'left-frame frame target';
        }
        if (parent.id == 'left') {
            parent.className = 'left-frame frame selected';
            document.getElementById('right').className = 'right-frame frame target';
        }
    }else{
        console.log(ev);
    }
}

function drop(ev) {
    ev.preventDefault();
    if ("files" in DataTransfer.prototype) {


        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));

        var parent = document.getElementById(ev.target.id);

        if (parent.id == 'right') {
            parent.className = 'right frame frame';
            document.getElementById('left').className = 'left-frame frame';
        }
        if (parent.id == 'left') {
            parent.className = 'left-frame frame';
            document.getElementById('right').className = 'right-frame frame';
        }
    }
}

