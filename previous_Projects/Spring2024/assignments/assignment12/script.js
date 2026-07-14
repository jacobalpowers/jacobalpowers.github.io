const getHouse = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
}

const showHouse = async () => {
    let house = await getHouse();
    let houseSection = document.getElementById("container");

    house.forEach((house) => {
        houseSection.append(getHouseInfo(house));
    });
}

const getHouseInfo = (house) => {
    let section = document.createElement("section");
    section.classList.add("house_item");

    let name = document.createElement("h2");
    name.innerHTML = house.name;
    section.append(name);


    let description = document.createElement("div");
    description.id = "description";

    let img = document.createElement("img");
    img.src = "https://portiaportia.github.io/json/images/house-plans/" + house.main_image;
    description.append(img);

    let description_details = document.createElement("div");
    description_details.id = "description_details";

    let size = document.createElement("p");
    size.innerHTML = "<b>Size: </b>" + house.size;
    description_details.append(size);

    let bedrooms = document.createElement("p");
    bedrooms.innerHTML = "<b>Bedrooms: </b>" + house.bedrooms;
    description_details.append(bedrooms);

    let bathrooms = document.createElement("p");
    bathrooms.innerHTML = "<b>Bathrooms: </b>" + house.bathrooms;
    description_details.append(bathrooms);

    let feature = document.createElement("p");
    for (var i = 0; i < house.features.length; i++) {
        feature.innerHTML += house.features[i];
    }
    description_details.append(feature);
    description.append(description_details);
    section.append(description);


    let floorplan_list = document.createElement("div");
    floorplan_list.id = "floorplan_list";

    for(var i = 0; i < house.floor_plans.length; i++) {
        let floorplan = document.createElement("div");
        floorplan.classList.add("floorplan");

        let floor_name = document.createElement("h3");
        floor_name.innerHTML = house.floor_plans[i].name;
        floorplan.append(floor_name);

        let floor_img = document.createElement("img");
        floor_img.src = "https://portiaportia.github.io/json/images/house-plans/" + house.floor_plans[i].image;
        floorplan.append(floor_img);
        floorplan_list.append(floorplan);
    }
    section.append(floorplan_list);


    return section;
}

const getFloorplans = (features) => {

}



window.onload = () => {
    showHouse();
}