import { computed, ref } from "@vue/reactivity";
import initialadvertiser from "./mock/all.js";

const advertisers = ref([...initialadvertiser]);


const advertisersIncompleted = computed(() =>
  advertisers.value.filter((t) => !t.completed)
);
const advertisersCompleted = computed(() =>
  advertisers.value.filter((t) => t.completed)
);

const addCartInCompleted = computed(()=>
advertisers.value.filter((t) => !t.cart)
);

const addCartCompleted = computed(()=>
advertisers.value.filter((t) => t.cart)
);

const toggle = (id) => {
  const advertiser = advertisers.value.find((t) => t.id === id);
  if (advertiser?.completed !== undefined) {
    advertiser.completed = !advertiser.completed;
  }
};

const addCourseCart = (id) => {
  const advertiser = advertisers.value.find((t) => t.id === id);
  if (advertiser?.cart !== undefined) {
    advertiser.cart = !advertiser.cart;
  }
};


const add = (name, description) => {
  const newMembers = {id: advertisers.value.length + 1, name, description,  completed: false};
  advertisers.value.push(newMembers);
};


const update = (payload) => {
  advertisers.value = payload;
}

  const deleteAdvertiser = (id) => {
    advertisers.value = advertisers.value.filter((t) => t.id !== id);
  };

  //const searchButton = document.querySelector('.btn btn-outline-success');
  //searchButton.onclick = filterByWorld();
  
  const filterByWorld = (name) =>{ 
    
    const filtroPorPalabra = advertisers.filter (item => item.name.includes("Angular"))
    filtroPorPalabra.map(() => {
      return true;
    })
    console.log(filtroPorPalabra);
  }

  const advertisersFactory = () => ({
    advertisersIncompleted,
    advertisersCompleted,
    toggle,
    deleteAdvertiser,
    add,
    update,
    filterByWorld,
    addCartCompleted,
    addCartInCompleted,
    addCourseCart
    //addPictures
  });

  export { advertisersFactory };
