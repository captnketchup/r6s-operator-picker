// Script to run in Chrome

const opdiv = document.querySelectorAll(
  "#app > div.r6s-op-list > div.oplist.r6s-operators-list > div.oplist__cards__wrapper"
)
const nodes = opdiv[0].childNodes

const exportList = []

/*
  nodes.forEach((e) => {
      console.log({
          "name": e.firstChild.text,
          "character": e.firstChild.children[0].src,
          "icon": e.firstChild.children[1].src
          })
  })
  */

nodes.forEach((e) => {
  exportList.push({
    name: e.firstChild.text,
    character: e.firstChild.children[0].src,
    icon: e.firstChild.children[1].src,
    type: "attack"
  })
})

console.log(exportList)
