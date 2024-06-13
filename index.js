
document.addEventListener('DOMContentLoaded', () => {
    const themesBtn = document.getElementById("themesBtn")
    const themesIcons = document.getElementById("themesIcons")
    const backgroundImage = document.getElementById("backgroundImageLightAndDark")
    const MainPageBg = document.getElementById("MainPage")
    const sreachInput = document.getElementById("sreachInput")
    const sreachInputvalue = document.getElementById("sreachInputvalue")
    const sreachInputValue2 = document.getElementById("sreachInputValue2")
    const footerContant = document.getElementById("footerContant")
    const updateValue = document.getElementById("updateValue")
    const checkbox = document.getElementById("checkBoxInput")
    const clearAllBtn = document.getElementById("clearBtn")
    const listCount = document.getElementById("listCount")

    let isFirstImage = true;
    let isCheckBox = true;
    themesBtn.addEventListener("click",()=>{
        if(isFirstImage){
            themesIcons.src = "./images/icon-sun.svg"
            backgroundImage.src= "./images/bg-desktop-dark.jpg"
            MainPageBg.id = "MainPageDark"
            sreachInput.id = "sreachInputDark"
            sreachInputvalue.id = "sreachInputvalueDark"
            sreachInputValue2.id = "sreachInputValue2Dark"
            footerContant.id = "footerContantDark"
            updateValue.id = "updateValueDark"
        }
        else{
            themesIcons.src = "./images/icon-moon.svg"
            backgroundImage.src= "./images/bg-desktop-light.jpg"
            MainPageBg.id = "MainPage"
            sreachInput.id = "sreachInput"
            sreachInputvalue.id = "sreachInputvalue"
            sreachInputValue2.id = "sreachInputValue2"
            footerContant.id = "footerContant"
            updateValue.id = "updateValue"
        }
        
        isFirstImage = !isFirstImage 
    })
    checkbox.addEventListener("click",()=>{
        if(isCheckBox){
            checkbox.id ="checkBoxChange"
        }
        else{
            checkbox.id ="checkBoxInput"
        }
        isCheckBox = !isCheckBox
    })
    sreachInput.addEventListener("submit",(e)=>{
        e.preventDefault();
        const valueHere = sreachInputvalue.value
        const newListItem = document.createElement('li');
        const hrLine = document.createElement("hr");
        newListItem.textContent = valueHere;
        const listLenght = newListItem.id
        updateValue.appendChild(newListItem);
        if(updateValue >= 0){
            newListItem.push(hrLine)
        }
        console.log(listLenght.length)
        document.getElementById('sreachInputvalue').value = '';
    })
    clearAllBtn.addEventListener("click",()=>{
        newListItem.remove()
    })
    let countValue = updateValue.length
    listCount.textContent = `${updateValue.length}`
})