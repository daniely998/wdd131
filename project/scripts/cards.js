const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modified: ${new Date(document.lastModified).toLocaleString()}`;

const cards = [
    {
        cardName: "Seasoned Warreguard",
        color: "White",
        manaValue: 1,
        image: "images/warrenguard.webp"
    },
    {
        cardName: "Pawpatch Recruit",
        color: "Green",
        manaValue: 1,
        image: "images/recruit.webp"
    },
    {
        cardName: "Valley Mightcaller",
        color: "Green",
        manaValue: 1,
        image: "images/mightcaller.webp"
    },
    {
        cardName: "Valley Questcaller",
        color: "White",
        manaValue: 2,
        image: "images/questcaller.webp"
    },
    {
        cardName: "Burrowguard Mentor",
        color: "Multicolor",
        manaValue: 2,
        image: "images/mentor.webp"
    },
    {
        cardName: "Finneas, Ace Archer",
        color: "Multicolor",
        manaValue: 2,
        image: "images/finneas.webp"
    },
    {
        cardName: "Hop to It",
        color: "White",
        manaValue: 3,
        image: "images/hop.webp"
    },
    {
        cardName: "Sanguine Evangelist",
        color: "White",
        manaValue: 3,
        image: "images/evangelist.webp"
    },
    {
        cardName: "Warren Warleader",
        color: "White",
        manaValue: 4,
        image: "images/warleader.webp"
    },
    {
        cardName: "Season of the Burrow",
        color: "White",
        manaValue: 5,
        image: "images/season.webp"
    },
]

createCardList(cards);

const manaValue = document.querySelector("#manavalue");
manaValue.addEventListener("click",() => {
    createCardList(cards.sort((a, b) => a.manaValue - b.manaValue));
});
const cardName = document.querySelector("#cardname");
cardName.addEventListener("click",() => {
    createCardList(cards.sort((a, b) => a.cardName.localeCompare(b.cardName)));
});
const cardColor = document.querySelector("#cardcolor");
cardColor.addEventListener("click",() => {
    createCardList(cards.sort((a, b) => sortByColor(a) - sortByColor(b)));
});

function createCardList(cards) {
	document.querySelector(".image").innerHTML = "";
	cards.forEach(card => {
		let img = document.createElement("img");

		img.setAttribute("src", card.image);
		img.setAttribute("alt", card.cardName);
		img.setAttribute("loading", "lazy");

		document.querySelector(".image").appendChild(img);
	});
}

function sortByColor(card) {
    if (card.color === "White")
    {
        return 0;
    }
    if (card.color === "Green")
    {
        return 1;
    }
    if (card.color === "Multicolor")
    {
        return 2;
    }
}