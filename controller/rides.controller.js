/* const rides = {
    ride1: {
        firstname: "Jack",
        lastname: "Davis",
        age: 25,
        id: 1
    },
    ride2: {
        firstname: "Mary",
        lastname: "Taylor",
        age: 37,
        id: 2
    },
    ride3: {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 3
    },
    ride4: {
        firstname: "Peter",
        lastname: "Thomas",
        age: 17,
        id: 4
    }
}
 */

let rides = [
    {
        firstname: "Peter",
        lastname: "Thomas",
        destination: "Ajegunle",
        startpoint: "Ikoyi",
        takeoff: "10:00am",
        spaceavailable: 2,
        age: 17,
        id: 4
    }
];


exports.create = function (req, res) {
    let newRide = req.body;
    newRide.id = rides.length + 1;
    rides.push(newRide);
    console.log("--->After Post, rides:\n" + rides.length + JSON.stringify(rides, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newRide, null, 4));
};

exports.findAll = (req, res) => {
    console.log("--->Find All: \n" + JSON.stringify(rides, null, 4));
    res.end("All Rides: \n" + JSON.stringify(rides, null, 4));
};

exports.findOne = function (req, res) {
    const ride = rides["ride" + req.params.id];
    console.log("--->Find ride: \n" + JSON.stringify(ride, null, 4));
    res.end("Find a Ride:\n" + JSON.stringify(ride, null, 4));
};

exports.update = function (req, res) {
    const id = parseInt(req.params.id);
    const updatedRide = req.body;
    if (rides["ride" + id] != null) {
        // update data
        rides["ride" + id] = updatedRide;

        console.log("--->Update Successfully, rides: \n" + JSON.stringify(rides, null, 4))

        // return
        res.end("Update Successfully! \n" + JSON.stringify(updatedRide, null, 4));
    } else {
        res.end("Don't Exist Ride:\n:" + JSON.stringify(updatedRide, null, 4));
    }
};

exports.delete = function (req, res) {
    const deleteRide = rides["ride" + req.params.id];
    delete rides["ride" + req.params.id];
    console.log("--->After deletion, ride list:\n" + JSON.stringify(rides, null, 4));
    res.end("Deleted ride: \n" + JSON.stringify(deleteRide, null, 4));
};