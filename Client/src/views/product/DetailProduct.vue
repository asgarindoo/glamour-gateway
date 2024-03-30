<template>
  <div class="overflow-hidden font-quicksand mr-10 md:mr-0 lg:md-0">
    <div class="animate__animated animate__fadeInDown">
      <NavbarHome class="mr-0" />
    </div>
    <div
      class="flex flex-col md:flex-row lg:flex-row items-start my-5 mx-auto animate__animated animate__fadeInUp sm:mr-0 md:mr-10 lg:mr-20">
      <!-- Product Images and Description -->
      <div
        class="w-[100%] md:w-1/2 lg:w-1/2 flex flex-col md:flex-row lg:flex-row items-start lg:items-center flex-wrap ml-10 lg:ml-20">
        <!-- Product Image (Large) -->
        <img
          :src="product.img"
          class="w-[100%] lg:w-[70%] lg:h-[50%] mb-4 lg:mb-0" />

        <!-- Product Images (Small) -->
        <div
          class="flex flex-row sm:flex-row md:flex-row lg:flex-col gap-2 lg:ml-6 sm:w-full md:w-full lg:w-[15%]">
          <img
            :src="product.img"
            class="w-[20%] h[20%] sm:w-[23%] sm:h-[23%] md:w-[23%] md:h-[23%] lg:w-[100%] lg:h-[100%] my-1" />
          <img
            :src="product.img"
            class="w-[20%] h[20%] sm:w-[23%] sm:h-[23%] md:w-[23%] md:h-[23%] lg:w-[100%] lg:h-[100%] my-1" />
          <img
            :src="product.img"
            class="w-[20%] h[20%] sm:w-[23%] sm:h-[23%] md:w-[23%] md:h-[23%] lg:w-[100%] lg:h-[100%] my-1" />
          <img
            :src="product.img"
            class="w-[20%] h[20%] sm:w-[23%] sm:h-[23%] md:w-[23%] md:h-[23%] lg:w-[100%] lg:h-[100%] my-1" />
        </div>

        <!-- Product Description -->
        <div class="mr-10 md:mr-0 lg:mr-0">
          <p
            class="text-sm mt-10 lg:mt-10 text-slate-900 bg-white border border-gray-200 py-5 px-5 lg:w-[100%] h-[240px] md:h-[300px] overflow-y-auto rounded-md shadow-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            iure quibusdam distinctio eaque ullam porro corrupti? Magnam sint ut
            velit dolores cumque dolor necessitatibus suscipit nemo repudiandae,
            fugit rem, iusto aliquid veritatis, deleniti voluptatem debitis
            dicta vero! Corrupti minus doloremque laborum maiores! Eveniet
            similique facere quam minima! Omnis veniam suscipit atque laboriosam
            pariatur nulla molestiae optio itaque quam! Eum consequatur vel
            vitae? Ipsam vero suscipit perspiciatis sapiente non ex commodi eum
            fugiat quod rem expedita nihil facere consequuntur cupiditate
            ducimus laborum quae tenetur libero fugit, adipisci recusandae
            dolore! Similique repellendus ipsum, laborum quis libero quaerat cum
            eum exercitationem consequatur voluptatibus doloribus sequi cumque,
            quidem, ipsam illo quam ratione doloremque. Nesciunt a sit impedit
            maiores sunt eos, magnam culpa harum, eaque nemo assumenda
            praesentium repellat deserunt voluptatem laboriosam placeat mollitia
            perspiciatis ad accusantium maxime qui facilis id. Soluta repellat
            nostrum deleniti voluptates mollitia nam deserunt ratione nesciunt
            autem maiores, quo fugit vel vitae at? Esse adipisci atque
            repellendus, similique ipsum quod cupiditate at quibusdam assumenda
            vitae aliquam cum fugit dicta obcaecati ratione, odio, qui mollitia
            dolorem odit pariatur consequuntur. Molestias similique iure quas ea
            alias. Modi laudantium, architecto velit dolorum voluptatibus autem
            earum incidunt tempore? Suscipit aut aspernatur ut inventore
            officia.
          </p>
        </div>
      </div>

      <!-- Product Details -->
      <div
        class="w-full mx-10 md:mx-0 lg:mx-0 md:w-full lg:w-1/2 md:pl-12 lg:pl-12 mt-8 md:mt-0 lg:mt-0">
        <div class="product-dtl">
          <h2 class="text-3xl font-semibold">{{ product.title }}</h2>

          <div class="flex items-center mt-2">
            <span class="text-slate-900">10 Reviews</span>
            <span class="mx-2">|</span>
            <span class="text-slate-900">{{ formattedPrice }}</span>
          </div>

          <!-- Description -->
          <div>
            <p class="mt-4 text-slate-900">
              {{ product.description }}
            </p>
          </div>

          <!-- Stock -->
          <div class="flex mt-4">
            <p class="text-slate-900">Stock:</p>
            <p class="pl-3">{{ product.stock }}</p>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="flex items-center mt-4">
            <label for="quantity" class="text-slate-900">Quantity:</label>
            <div class="flex ml-4">
              <button
                @click="decrementQuantity"
                class="text-slate-900 px-4 py-2 border border-slate-700 rounded-l bg-white">
                -
              </button>
              <input
                type="text"
                v-model="quantity"
                class="w-16 text-center bg-gray-100 border-t border-b border-slate-700 focus:outline-none" />
              <button
                @click="incrementQuantity"
                class="text-slate-900 px-4 py-2 border border-slate-700 rounded-r bg-white">
                +
              </button>
            </div>
          </div>

          <!-- Notes -->
          <div class="flex items-center mt-4">
            <textarea
              id="notes"
              v-model="notes"
              placeholder="Enter additional notes here (optional & max 100 characters)"
              rows="1"
              maxlength="100"
              style="resize: none"
              class="w-full mt-2 py-3 px-3 bg-gray-200 border border-slate-900 rounded-sm focus:outline-none text-slate-900"></textarea>
          </div>

          <!-- Address -->
          <div class="flex items-center mt-4">
            <textarea
              id="address"
              v-model="address"
              placeholder="Enter your address here (max 250 characters)"
              rows="2"
              maxlength="250"
              style="resize: none"
              class="w-full mt-2 py-3 px-3 bg-gray-200 border border-slate-900 rounded-sm focus:outline-none text-slate-900"></textarea>
          </div>

          <!-- Add to Cart Button -->
          <button
            @click="addToCart(product.id)"
            class="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-2 rounded-sm mt-4">
            Add to Cart
          </button>

          <!-- Add to Cart Button -->
          <button
            @click="Checkout"
            class="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-8 py-2 rounded-sm mt-4 ml-4">
            Checkout
          </button>

          <!-- Review -->
          <div class="mt-5">
            <h3 class="text-lg font-semibold text-slate-700">Reviews</h3>
            <div
              class="border border-gray-200 p-4 rounded-md mt-4 max-h-[200px] overflow-y-auto">
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Great product! Highly recommended."
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Very satisfied with the quality. Will buy again!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Excellent service and fast delivery. Thank you!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Impressive product! Loved it!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Great value for money. Highly recommended!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Quick shipping and excellent packaging!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Very happy with the purchase. Exactly as described!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Highly recommended seller. Will definitely buy again!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Great customer service. Thank you for your assistance!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
              <div class="mb-4">
                <p class="text-gray-700 text-sm">
                  "Product exceeded my expectations. Very satisfied!"
                </p>
                <p class="text-gray-600 text-xs">- Anonymous</p>
              </div>
            </div>
          </div>

          <!-- end review-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  data() {
    return {
      product: {},
      quantity: 1,
      notes: "",
      address: "",
    };
  },
  async created() {
    const id = this.$route.params.id;
    const result = await axios.get(`http://localhost:8000/api/products/${id}`);
    this.product = result.data;
  },
  components: {
    NavbarHome,
  },
  computed: {
    formattedPrice() {
      if (this.product.price) {
        return this.product.price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        });
      } else {
        return "Price not available";
      }
    },
  },
  methods: {
    incrementQuantity() {
      this.quantity++;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    async addToCart(productId) {
      try {
        await axios.post("http://localhost:8000/api/cart/1", {
          productId: productId,
          quantity: this.quantity,
        });

        console.log("Item berhasil ditambahkan ke keranjang");
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    },
  },
};
</script>

<style scoped>
/* * {
  border: red 1px solid;
} */
</style>
