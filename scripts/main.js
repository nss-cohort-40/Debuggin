console.log("We be debuggin'")

// get references to DOM elements
const section = document.querySelector("section");
const header = document.querySelector("header");
const clearButton = document.querySelector("#clear")


// define an array of snack objects
const snacks = [
  {
    name: "doritos",
    tastesGood: true
  },
  {
    name: "pretzels",
    tastesGood: true
  },
  {
    name: "sardines",
    tastesGood: false
  },
  {
    name: "crackers",
    tastesGood: true
  },
  {
    name: "almonds",
    tastesGood: true
  },
  {
    name: "cookies",
    tastesGood: true
  },
  {
    name: "caviar",
    tastesGood: false
  }
]

// snack card factory takes a snack object and makes an HTML representation
function snackCard(snack) {
  let taste = "yum"
  if (!snack.tastesGood) {
    taste = "yuck"
  }
  return `<div id=${snack.name} class="snackCard">
            <h1>${snack.name}</h1>
            <button class="${taste} btn">Eat!</button>
          </div>`
}

// iterate snack objects array and make snack cards for each
for (let i = 0; i < snacks.length; i++) {
  // console.log("What is i:", i)
  section.innerHTML += snackCard(snacks[i])
}

// get all snack card buttons
const buttons = document.querySelectorAll(".btn")

// define event listener functionality
function eatSnack(event) {
  // find gross snacks, change bkg to green, and remove button
  if (event.target.classList.value === "yuck btn") {
    alert("That was gross. No more for me!")
    event.target.parentElement.classList.add("gross")
    this.removeEventListener("click", eatSnack);
    const grossHeader = document.createElement("h1");
    grossHeader.setAttribute("id", `h-${event.target.parentElement.id}`)
    grossHeader.innerText = `${event.target.parentElement.id} taste gross`
    header.appendChild(grossHeader)
    this.remove()
    return
  }
  // otherwise, toggle bkg from red to blue, and change btn text
  if (event.target.innerHTML === "Eat!") {
    alert("That was yummy!")
    event.target.innerHTML = "I want more!"
  } else {
    alert(event.target.classList.value)
    event.target.innerHTML = "Eat!"
  }
  event.target.parentElement.classList.toggle("eaten")
}

// apply event listeners to each snack card button
buttons.forEach(button => button.addEventListener("click", eatSnack));


// clear headers - add try/catch in case no headers exist
clearButton.addEventListener("click", () => {
  try {
    header.removeChild(header.lastElementChild)
  } catch (exception) {
    console.error("There are no headers to remove!!");
    console.error(exception)
  }
})