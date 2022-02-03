const button = document.getElementById("button")
const appWrapper = document.getElementById("app-wrapper")

const goProcess = () => {

	const addSpan = () => {
		const waitingSpan = document.createElement("div")
		appWrapper.append(waitingSpan)
		waitingSpan.className = "waitingSpan"
		waitingSpan.innerHTML = "waiting..."
		button.className = "button loading"
	}

	const removeSpan = () => {
		const waitingSpan = document.querySelector(".waitingSpan")
		waitingSpan.innerHTML = ""
		button.classList.remove = "loading"
	}

	const getResult = async () => {

		const getAPI = async () => {
			const response = await fetch("https://gp-js-test.herokuapp.com/pizza")
			const data = await response.json()
			removeSpan()
			const result = data.party
			return result
		}

		const partyMembers = await getAPI()
		const pizzaEaters = partyMembers.filter(member => member.eatsPizza === true)

		const infoSpace = document.createElement("div")
		const circle = document.createElement("div")
		const partyMembersCounter = document.createElement("div")
		const titlePartyMembersCounter = document.createElement("div")
		const numberPartyMembersCounter = document.createElement("div")
		const pizzaEatersCounter = document.createElement("div")
		const titlePizzaEatersCounter = document.createElement("div")
		const numberPizzaEatersCounter = document.createElement("div")

		appWrapper.append(circle)
		appWrapper.append(infoSpace)
		infoSpace.append(partyMembersCounter, pizzaEatersCounter)
		partyMembersCounter.append(titlePartyMembersCounter, numberPartyMembersCounter)
		pizzaEatersCounter.append(titlePizzaEatersCounter, numberPizzaEatersCounter)

		titlePartyMembersCounter.innerHTML = "Total party members"
		numberPartyMembersCounter.innerHTML = partyMembers.length
		titlePizzaEatersCounter.innerText = "Total pizza eaters"
		numberPizzaEatersCounter.innerHTML = pizzaEaters.length

		infoSpace.className = "infoSpace"
		circle.className = "circle"
		partyMembersCounter.className = "counterList"
		pizzaEatersCounter.className = "counterList"
		titlePartyMembersCounter.className = "counterTitle"
		titlePizzaEatersCounter.className = "counterTitle"
		numberPartyMembersCounter.className = "counterNumber"
		numberPizzaEatersCounter.className = "counterNumber"

		for (let i = 0; i < numberPizzaEatersCounter.innerHTML/2; i++) {
			const div = document.createElement("div")
			circle.append(div)
			div.id = i + 11
		}

		let degrees = 360/numberPizzaEatersCounter

		for (let u = 0; u < numberPizzaEatersCounter.innerHTML/2; u++) {
			const div = document.getElementById(`1${u+1}`)
			div.className = "diagonalSlicing"
			div.style.transform = `rotate(${degrees * u}deg)`
		}
	}

	const processFunc = () => {
		addSpan()
		setTimeout(getResult, 1000)
	}

	processFunc()
}

button.onclick = goProcess