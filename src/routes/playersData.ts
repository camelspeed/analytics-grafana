let teams = ["Real Madrid", "Barcelona", "Juventus", "AC Milan", "Napoli", "Liverpool", "Dortmund"];
let statuses = ["Active", "Injured", "Inactive", "On Loan", "Retired"];
let firstNames = ["Christian", "Gio", "John", "Paolo", "Roberto", "Diego", "Zlatan", "Thierry", "Kevin", "Lionel", "Killian"];
let lastNames = ["Pulisic", "Reyna", "Barnes", "Maldini", "Baggio", "Maradona", "Ibrahimovic", "Henry", "De Bruyne", "Messi", "Mbappe"];
let positions = ["Attacker", "Winger", "Midfielder", "Defender"];

interface Player {
    id: string,
    firstName: string;
    lastName: string;
    position: string;
    team: string;
    status: string;
    createdOn: number;
    updatedOn: number;
}

export { teams, statuses, firstNames, lastNames, positions, Player }
