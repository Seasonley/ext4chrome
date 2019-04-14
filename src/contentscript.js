import Chinese from 'chinese-s2t'
var suidct=document.createElement('div')
suidct.className='suidct'
document.body.appendChild(suidct)

var style = document.createElement('style')
style.innerHTML=`
.suidct{
    position: absolute;
    z-index: 1;
    top: 0;right: 0;left: 0;bottom: 0;
    background: linear-gradient(to right top,rgba(100,100,100,0.5) 50%,transparent 50%) no-repeat;
    background-size: 100% calc(100% - 100vh + 2px);
    pointer-events: none;
    mix-blend-mode: darken;
}
.suidct::after{
    content:'';
    position: fixed;z-index: 99999;
    top: 2px;bottom: 0;right: 0;left: 0;
    background: #fff;
}
body{
    margin:0;
    position: relative;
}
::-webkit-scrollbar{
    width:4px;
    height:4px;
    background:trans[]
}
::-webkit-scrollbar-thumb {
    background-color: rgba(100,100,100,0.5);
  }
`; 
document.getElementsByTagName('head').item(0).appendChild(style)
function transwalk(ele){
var treeWalker = document.createTreeWalker(
    ele,
    NodeFilter.SHOW_TEXT,
    { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
    false
  );
while(treeWalker.nextNode()){
    treeWalker.currentNode.data=Chinese.t2s(treeWalker.currentNode.data)
}
}
transwalk(document.body)

var observer = new MutationObserver(function(mutationList){
    mutationList.forEach((mutation) => {
        if(mutation.type=='childList'){
            mutation.addedNodes.forEach(function(ele){
                transwalk(ele)
            })
        }
      });
});
observer.observe(document.body, {
    childList: true, 
    attributes: false, 
    subtree: true 
  });