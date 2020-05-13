const works = [
    {
        author: "Micheal Jackson",
        lifetime: "1022-1055",
        tips: "Human",
        photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
    },
    {author: "Maria JK", lifetime: "1920-2001", tips: "Classical", photos: ["classical1.jpg", "classical2.jpg"]},
    {
        author: "John Herry UY",
        lifetime: "1894-1928",
        tips: "Abstract",
        photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
    },
    {author: "Coco", lifetime: "1777-1799", tips: "Beauty", photos: ["beauty1.jpg", "beauty2.jpg"]}
];

let divContainer = document.getElementsByClassName("flex-container")[0];

for (let i = 0; i < 4; i++) {
    let div = document.createElement("div");
    div.className = "item";
    div.innerText = "Genre : " + works[i].tips;

    let innerBox1 = document.createElement("div");
    innerBox1.className = "inner-box";
    div.appendChild(innerBox1);

    let author = document.createElement("h3");
    author.innerHTML = works[i].author;
    author.style.display="inline";
    innerBox1.appendChild(author);

    let lifetime = document.createElement("h5");
    lifetime.innerHTML = "lifetime:"+works[i].lifetime;
    lifetime.style.display="inline";
    lifetime.style.paddingLeft="2em";
    innerBox1.appendChild(lifetime);

    let innerBox2 = document.createElement("div");
    innerBox2.className = "inner-box";
    div.appendChild(innerBox2);

    let photoTip = document.createElement("h3");
    photoTip.innerHTML = "Popular Photos";
    innerBox2.appendChild(photoTip);

    for(let j=0;j<works[i].photos.length;j++){
        let photo=document.createElement("img");
        photo.src=works[i].photos[j];
        photo.className="photo";
        innerBox2.appendChild(photo);
    }

    let button = document.createElement("button");
    button.innerHTML = "Visit";
    div.appendChild(button);

    divContainer.appendChild(div);
}