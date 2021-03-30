let btn = document.querySelector(".btn");
let resetBtn = document.querySelector(".reset-btn");
let rDogImg = document.querySelector(".dog");
let rDogText = document.querySelector(".dog-title");
let rDogDescription = document.querySelector(".dog-description");

function generateDogs(){
    let dogArray = [
        
       {
           img: "https://i.ibb.co/HtSc6VK/Golden-Retriever.png",
           breed: "Golden Retriever",
           description: "The Golden Retriever is one of the most popular dog breeds in the United States. The breed’s friendly, tolerant attitude makes them great family pets, and their intelligence makes them highly capable working dogs."
       },

       {
        img: "https://i.ibb.co/F7yjDJf/German-Shepherd-Dog-Transparent-Background-PNG.png",
        breed: "German Shepard",
        description: "The German Shepherd Dog is one of America’s most popular dog breeds — for good reasons. They’re intelligent and capable working dogs. Their devotion and courage are unmatched. And they’re amazingly versatile."
        
        },

        {
            img: "https://i.ibb.co/qBRVvQz/232c19ca0e7235277fc0fac1ced9eb68.png",
            breed: "Beagle",
            description: "Small, compact, and hardy, Beagles are active companions for kids and adults alike. Canines of this dog breed are merry and fun loving, but being hounds, they can also be stubborn and require patient, creative training techniques."
            
        },

        {
            img: "https://i.ibb.co/Vwt0Q77/Dog-Transparent-Background-839x1024.png",
            breed: "Jack Russel Terrier",
            description: "Developed in England some 200 years ago to hunt foxes, the Jack Russell Terrier, also known as the Parson Russell Terrier, is a lively, independent, and clever little dog. They’re charming and affectionate, but they’re also a handful to train and manage. For experienced dog parents only!"
            
        },

        {
            img: "https://i.ibb.co/T40TXXJ/dog-png-9101.png",
            breed: "Labrador Retriever",
            description: "The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, they earned their keep as fishermen’s helpers: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic."
            
        },

        {
            img: "https://i.ibb.co/jfLTKcW/273-2731832-transparent-background-brown-dog-transparent.png",
            breed: "Weimaraner",
            description: "Originally bred as a gundog to handle big game like deer and bear, the Weimaraner, or “Silver Ghost,” was a highly sought-after dog breed in their native Germany. Today, these elegant but demanding dogs can still be found out on the hunting grounds. However, they can also make fine family friends if they get enough exercise."
            
        },

        {
            img: "https://i.ibb.co/5MbdCnC/4797808-download-pembroke-welsh-corgi-corgi-png-png-image-with-no-pembroke-welsh-corgi-png-556-463-p.png",
            breed: "Corgi",
            description: "Originally bred to herd cattle, sheep, and horses, the Pembroke Welsh Corgi is an active and intelligent dog breed. Easy to train and eager to learn, Pembrokes are great with children and other pets, and you can find them in four different coat colors and markings."
            
        },

        {
            img: "https://i.ibb.co/sVVy7HH/dachshund-PNG51.png",
            breed: "Dachsund",
            description: "Dachshunds are scent hound dogs bred to hunt badgers and other tunneling animals, rabbits, and foxes. Hunters even used packs of Dachshunds to trail wild boar. Today their versatility makes them excellent family companions, show dogs, and small-game hunters."
            
        },

        {
            img: "https://i.ibb.co/3YT0FZd/chihuahua-png-4.png",
            breed: "Chihuahua",
            description: "The Chihuahua dog breed‘s charms include their small size, big personality, and variety in coat types and colors. They’re all dog, fully capable of competing in dog sports such as agility and obedience, and are among the top ten watchdogs recommended by experts."
            
        },

        {
            img: "https://i.ibb.co/5r9y9Cx/6c4dc295e5ad5b9a3449dfbb9d4f66a2.png",
            breed: "Papillon",
            description: "The Papillon dog breed descends from the toy spaniels that are frequently portrayed in paintings by the Old Masters, from as far back as the 16th century. They’re highly active and wonderful competitors in agility and obedience."
            
        },

        {
            img: "https://i.ibb.co/nDvXZZN/5069219-pomeranian-png-100-images-in-collection-page-1-pomeranian-png-564-400-preview.png",
            breed: "Pomeranian",
            description: "Descended from large sled dog breeds, the now-tiny Pomeranian has a long and interesting history. The foxy-faced dog, nicknamed “the little dog who thinks he can,” is compact, active, and capable of competing in agility and obedience or simply being a family friend."
            
        },

        {
            img: "https://i.ibb.co/fp6x3z1/husky-PNG24.png",
            breed: "Husky",
            description: "The Siberian Husky dog breed has a beautiful, thick coat that comes in a multitude of colors and markings. Their blue or multi-colored eyes and striking facial masks only add to the appeal of this breed, which originated in Siberia."
            
        },

        {
            img: "https://i.ibb.co/8rq49Ws/maltese.png",
            breed: "Maltese",
            description: "A gentle and fearless dog breed, the Maltese greets everyone as a friend. Their glamorous white coat gives them a look of haughty nobility, but looks can be deceiving."
            
        },

        {
            img: "https://i.ibb.co/hXMp2P4/d6f4d5d9c734dab48676a8a3c5e27d9b.png",
            breed: "Bichon Frise",
            description: "The Bichon Frise (pronounced BEE-shawn FREE-say; the plural is Bichons Frises) is a cheerful, small dog breed with a love of mischief and a lot of love to give. With their black eyes and fluffy white coat, the Bichon looks almost like a child’s toy."
            
        },

        {
            img: "https://i.ibb.co/zs1kwd8/4763553-dalmatian-png-free-dalmatianpng-transparent-images-10374-pngio-dalmatian-dog-png-447-447-pre.png",
            breed: "Dalmatian",
            description: "Best known as the star of Disney’s 101 Dalmatians, this sleek and athletic Dalmatian dog breed has a history that goes back several hundred years. They started out as a coach dog but also served in many other capacities, including hunter, firehouse dog, and circus performer."
            
        },

        {
            img: "https://i.ibb.co/GPBQPfX/5847f60fcef1014c0b5e48a2.png",
            breed: "Pit Bull",
            description: "The American Pit Bull Terrier is a companion and family dog breed. Originally bred to “bait” bulls, the breed evolved into all-around farm dogs, and later moved into the house to become “nanny dogs” because they were so gentle around children."
            
        },

        {
            img: "https://i.ibb.co/8bcH0K5/5a00520e092a74e5b928e76a.png",
            breed: "Pug",
            description: "The Pug is often described as a lot of dog in a small space. These sturdy, compact dogs are a part of the American Kennel Club’s Toy group, and are known as the clowns of the canine world because they have a great sense of humor and like to show off."
            
        },
        
         {
            img: "https://i.ibb.co/gDB6xKN/316-3167317-miniature-schnauzer.png",
            breed: "Mini Schnauzer",
            description: "The Miniature Schnauzer dog breed has it all in one small package: intelligence, affection, an extroverted temperament, humor, and a personality that’s twice as big as their bodies. Throw in that walrus mustache and quivering enthusiasm, and they’ll make you laugh every day."
            
        }

    
    ];

    let randomDog = Math.floor(Math.random() * dogArray.length);
    rDogImg.src = dogArray[randomDog].img;
    rDogText.innerHTML = dogArray[randomDog].breed;
    rDogDescription.innerHTML = dogArray[randomDog].description;
    // document.querySelector(".dog").setAttribute("src", dogArray[randomDog]);
}

btn.addEventListener("click", function(){
    generateDogs();
});

resetBtn.addEventListener("click", function(){
    location.reload();
})
