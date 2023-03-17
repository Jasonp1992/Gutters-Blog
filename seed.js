const { db } = require("./server/db");
const BlogPost = require("./server/db/models/blogPost");
const User = require("./server/db/models/user");

const seed = async () => {
  try {
    await db.sync({ force: true });

    const [user1] = await Promise.all([
      User.create({
        userId: 1,
        name: "Jason Potvin",
      }),
    ]);

    const [blogPost1, blogPost2, blogPost3, blogPost4] = await Promise.all([
      BlogPost.create({
        postId: 123,
        title: "According a funnily until pre-set or arrogant well cheerful",
        imgRef:
          "https://images.unsplash.com/photo-1508004526072-3be43a5005f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlnZ2VyJTIwcGljdHVyZXxlbnwwfHwwfHw%3D&w=1000&q=80",
        date: "Feb 5, 2023",
        category: "Music",
        description:
          "Single shot cultivar beans as chicory caffeine. Medium brewed, milk extra that froth pumpkin spice mocha. Whipped redeye pumpkin spice sweet, extraction to go macchiato acerbic steamed filter. Robusta grounds decaffeinated.",
        userId: user1.id,
      }),
      BlogPost.create({
        postId: 124,
        title: "Overlaid the jeepers uselessly much excluding",
        imgRef:
          "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
        date: "Feb 10, 2023",
        category: "Home",
        description:
          "The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word 'and' and the Little Blind",
        userId: user1.id,
      }),
      BlogPost.create({
        postId: 125,
        title:
          "Coffee variety macchiato, as organic ut variety caffeine americano",
        imgRef:
          "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
        date: "Feb 15, 2023",
        category: "Travel",
        description:
          "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        userId: user1.id,
      }),
      BlogPost.create({
        postId: 126,
        title:
          "Wherever far wow thus a squirrel raccoon jeez jaguar this from along",
        imgRef:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/16:9/w_2123,h_1194,c_limit/phonepicutres-TA.jpg",
        date: "Feb 24, 2023",
        category: "Music",
        description:
          "Saucer, crema carajillo, bar, mocha medium, latte cappuccino and espresso acerbic to go. Coffee, irish foam turkish coffee blue mountain seasonal. Turkish grinder medium, plunger pot, coffee viennese crema galão macchiato.",
        userId: user1.id,
      }),
    ]);
  } catch (err) {
    console.log(err);
  }
};

async function runSeed() {
  try {
    await seed();
    console.log("Seeding success!");
  } catch (err) {
    console.error("Oh noes! Something went wrong!");
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}
