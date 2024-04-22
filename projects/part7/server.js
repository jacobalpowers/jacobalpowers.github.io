const express = require("express");
const app = express();
const joi = require("joi");
const mongoose = require("mongoose");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());

mongoose
    .connect("mongodb+srv://japowers:RUD1IMizJvcIr6Q4@data.wtiy9yq.mongodb.net/")
    .then(() => console.log("Connected to mongodb..."))
    .catch((err) => console.error("Could not connect to mongodb...", err));

const cardSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    game: String,
    set: String,
    img: String,
    description: String,
});

const Card = mongoose.model("Card", cardSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, () => {
    console.log("I'm Listening");
});

app.get("/api/cards", (req, res) => {
    res.json(cardJSON);
});


let cardJSON = [{
    "_id": 1,
    "name": "Ragavan, Nimble Pilferer",
    "game": "Magic the Gathering",
    "set": "Multiverse Legends",
    "img": "ragavan.jpeg",
    "description": {
      "effect": "Whenever Ragavan, Nimble Pilferer deals combat damage to a player, create a Treasure token and exile the top card of that player’s library. Until end of turn, you may cast that card.\nDash 1R (You may cast this spell for its dash cost. If you do, it gains haste, and it’s returned from the battlefield to its owner’s hand at the beginning of the next end step.)",
      "power/toughness": "2/1",
      "type": "Legendary Creature - Monkey Pirate",
      "color": ["red"],
      "cmc": "1"
    }
},
{
    "_id": 2,
    "name": "Animar, Soul of Elements",
    "game": "Magic the Gathering",
    "set": "Double Masters 2022",
    "img": "animar.jpeg",
    "description": {
      "effect": "Protection from white and from black\\nWhenever you cast a creature spell, put a +1/+1 counter on Animar, Soul of Elements.\\nCreature spells you cast cost 1 less to cast for each +1/+1 counter on Animar.",
      "power/toughness": "1/1",
      "type": "Legendary Creature - Elemental",
      "color": ["green", "blue", "red"],
      "cmc": "3"
    }
},
{
    "_id": 3,
    "name": "Rhystic Study",
    "game": "Magic the Gathering",
    "set": "Jumpstart",
    "img": "rhystic.jpeg",
    "description": {
        "effect": "Whenever an opponent casts a spell, you may draw a card unless that player pays 1.",
        "power/toughness": "",
        "type": "Enchantment",
        "color": ["blue"],
        "cmc": "3"
    }
},
{
    "_id": 4,
    "name": "Iron Crown",
    "game": "Pokemon",
    "set": "Temporal Forces",
    "img": "ironcrown.png",
    "description": {
      "type": "psychic",
      "hp": 220,
      "card_type": "Pokemon - Basic",
      "weakness": "Darkness",
      "resistance": "Fighting",
      "retreat": 2,
      "text": "Ability\\nCobalt Command\\nAttacks used by your Future Pokémon, except any Iron Crown ex, do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).\\n\\nPCC Twin Shotels\\nThis attack does 50 damage to 2 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance, or by any effects on those Pokémon."
    }
},
{
    "_id": 5,
    "name": "Meltan",
    "game": "Pokemon",
    "set": "Temporal Forces",
    "img": "meltan.png",
    "description": {
      "type": "Metal",
      "hp": 80,
      "card_type": "Pokemon - Basic",
      "weakness": "Fire",
      "resistance": "Grass",
      "retreat": 3,
      "text": "MM Headbutt 50"
    }
},
{
    "_id": 6,
    "name": "Ancient Booster Energy Capsule",
    "game": "Pokemon",
    "set": "Paradox Rift",
    "img": "ancientbooster.png",
    "description": {
        "type": "",
        "hp": 0,
        "card_type": "Trainer - Tool",
        "weakness": "",
        "resistance": "",
        "retreat": 0,
        "text": "The Ancient Pokémon this card is attached to gets +60 HP, recovers from all Special Conditions, and can't be affected by any Special Conditions."
    }
},
{
    "_id": 7,
    "name": "Kashtira Fenrir",
    "game": "Yugioh",
    "set": "Darkwing Blast",
    "img": "fenrir.jpeg",
    "description": {
        "type": "Psychic / Effect",
        "atk": "2400",
        "def": "2400",
        "attribute": "Earth",
        "text": "If you control no monsters, you can Special Summon this card (from your hand). You can only use each of the following effects of \"Kashtira Fenrir\" once per turn. During your Main Phase: You can add 1 \"Kashtira\" monster from your Deck to your hand. When this card declares an attack, or if your opponent activates a monster effect (except during the Damage Step): You can target 1 face-up card your opponent controls; banish it, face-down."
    }
},
{
    "_id": 8,
    "name": "Ninjitsu Art Notebook of Mystery",
    "game": "Yugioh",
    "set": "Darkwing Blast",
    "img": "notebook.jpeg",
    "description": {
        "type": "Spell / Quick-Play",
        "atk": "",
        "def": "",
        "attribute": "Spell",
        "text": "If your opponent controls a card: You can Set up to 1 \"Ninja\" monster, and up to 1 \"Ninjitsu Art\" Spell/Trap, except \"Ninjitsu Art Notebook of Mystery\". These cards come from your Deck and/or GY, but only 1 can come from each. If this Set card on the field is sent to the GY: You can target 1 face-up monster on the field; change it to face-down Defense Position. You can only use each effect of \"Ninjitsu Art Notebook of Mystery\" once per turn."
    }
},
{
    "_id": 9,
    "name": "PSY-Framelord Omega",
    "game": "Yugioh",
    "set": "Battles of Legend: Light's Revenge",
    "img": "omega.jpeg",
    "description": {
        "type": "Psychic / Synchro / Effect",
        "atk": "2800",
        "def": "2200",
        "attribute": "Light",
        "text": "1 Tuner + 1+ non-Tuner monsters\\nOnce per turn, during the Main Phase (Quick Effect): You can banish both this face-up card from the field and 1 random card from your opponent's hand, face-up, until your next Standby Phase. Once per turn, during your opponent's Standby Phase: You can target 1 banished card; return it to the GY. If this card is in your GY: You can target 1 other card in the GY; shuffle both that card and this card from the GY into the Deck."
    }
},
{
    "_id": 10,
    "name": "Sugar",
    "game": "One Piece",
    "set": "WINGS OF THE CAPTAIN-[OP06]",
    "img": "sugar.png",
    "description": {
        "type": "Donquixote Pirates",
        "power": "0",
        "counter": "1000",
        "color": ["Green"],
        "cost": "2",
        "attribute": "Special",
        "text": "[Opponent's Turn] [Once Per Turn] When your opponent plays a Character, if your Leader has the {Donquixote Pirates} type, rest up to 1 of your opponent's Characters. Then, rest this Character.\\n[On Play] Rest up to 1 of your opponent's Characters with a cost of 4 or less."
    }
},
{
    "_id": 11,
    "name": "Gecko Moria",
    "game": "One Piece",
    "set": "WINGS OF THE CAPTAIN-[OP06]",
    "img": "moria.png",
    "description": {
        "type": "The Seven Warlords of the Sea/Thriller Bark Pirates",
        "power": "5000",
        "counter": "",
        "color": ["Black"],
        "cost": "",
        "attribute": "Special",
        "text": "[DON!! x1] [When Attacking] ➁ (You may rest the specified number of DON!! cards in your cost area.) You may trash 1 card from your hand: Trash 2 cards from the top of your deck and play up to 1 {Thriller Bark Pirates} type Character card with a cost of 4 or less from your trash."
    }
},
{
    "_id": 12,
    "name": "Radical Beam!!",
    "game": "One Piece",
    "set": "ROMANCE DAWN- [OP01]",
    "img": "radbeam.png",
    "description": {
        "type": "Straw Hat Crew",
        "power": "",
        "counter": "",
        "color": ["Red"],
        "cost": "1",
        "attribute": "",
        "text": "[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, if you have 2 or less Life cards, that card gains an additional +2000 power.\\n\\n[Trigger] Up to 1 of your Leader or Character cards gains +1000 power during this turn."
    }
}

];


const createCard = async (item) => {
    const card = new Card ({
        _id: item._id,
        name: item.name,
        game: item.game,
        set: item.set,
        img: item.img,
        description: item.description,
    });

    const result = await card.save();
    console.log(result);
}

/*for (let i in cardJSON) {
    createCard(i);
}*/