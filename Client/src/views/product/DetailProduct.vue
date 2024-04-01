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
      </div>

      <!-- Product Details -->
      <div
        class="w-full mx-10 md:mx-0 lg:mx-0 md:w-full lg:w-1/2 md:pl-12 lg:pl-12 mt-8 md:mt-0 lg:mt-0">
        <div class="product-dtl">
          <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
          <!-- Description -->
          <div>
            <p class="mt-4 text-slate-900 text-md">
              {{ product.description }}
            </p>
          </div>

          <div class="flex items-center mt-2 text-sm">
            <span class="text-slate-900">10 Reviews</span>
            <span class="mx-2">|</span>
            <span class="text-slate-900">{{ formattedPrice }}</span>
          </div>

          <div class="flex mt-4 text-sm">
            <p class="text-slate-900">
              {{ product.category }} - From {{ product.country }}
            </p>
          </div>

          <!-- Stock -->
          <div class="flex mt-4 text-sm">
            <p class="text-slate-900">Stock:</p>
            <p class="pl-3">
              {{ product.stock }}
            </p>
          </div>

          <!-- Quantity & Add to Cart -->
          <div class="flex items-center mt-4 text-sm">
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

          <!-- end review-->
        </div>
      </div>
    </div>

    <!-- Product Description -->
    <div
      class="mx-10 mr-0 sm:mr-0 md:mr-10 lg:mx-20 animate__animated animate__fadeInUp">
      <div
        class="text-sm lg:mt-10 border border-gray-200 p-4 rounded-md mt-4 w-full h-[300px] overflow-y-auto">
        <!-- Product Opening Description -->
        <div v-if="selectedCategory.category">
          <h2>{{ selectedCategory.category.openingProduct }}</h2>
          <br />
          <h3>Key Features:</h3>
          <ul>
            <li
              v-for="feature in selectedCategory.category.features"
              :key="feature">
              - {{ feature }}
            </li>
          </ul>
          <br />
          <h3>Directions:</h3>
          <p>{{ selectedCategory.category.directions }}</p>
          <br />
          <h3>Ingredients:</h3>
          <p>{{ selectedCategory.category.ingredients }}</p>
          <br />
          <h3>Caution:</h3>
          <p>{{ selectedCategory.category.cautionNote }}</p>
        </div>
      </div>
    </div>

    <!-- Review -->
    <div
      class="mt-5 mx-10 mr-0 sm:mr-0 md:mr-10 lg:mx-20 animate__animated animate__fadeInUp">
      <h3 class="text-lg font-semibold">Reviews</h3>
      <div class="mt-4 space-y-4">
        <!-- Loop through reviews -->
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="border border-gray-200 rounded-md p-4 flex items-start">
          <img
            v-bind:src="review.profilePicture"
            class="w-10 h-10 rounded-full mr-4"
            :alt="'User Avatar ' + index" />
          <div>
            <span class="font-semibold">{{ review.name }}</span>
            <div class="flex items-center justify-between mb-2">
              <div>
                <div class="flex items-center">
                  <div class="text-lg font-semibold text-gray-700">★★★★★</div>
                </div>
                <div class="text-xs text-gray-600">
                  <span> {{ review.date }} | {{ product.category }} </span>
                </div>
              </div>
            </div>
            <p class="text-gray-700 text-sm">"{{ review.comment }}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import axios from "axios";
import { ref } from "vue";
import NavbarHome from "@/components/NavbarHome.vue";

export default {
  setup() {
    const { user, isAuthenticated } = useAuth0();
    const sub = ref(null); // Gunakan ref untuk menyimpan nilai sub

    const addToCart = async (productId) => {
      try {
        // Jika pengguna sudah terautentikasi, atur nilai sub
        if (isAuthenticated.value) {
          sub.value = user.value.sub;
        } else {
          console.error("User is not authenticated"); // Menampilkan pesan kesalahan jika pengguna tidak terautentikasi
          return; // Menghentikan proses lebih lanjut jika pengguna tidak terautentikasi
        }

        await axios.post(`http://localhost:8000/api/cart/${sub.value}`, {
          productId: productId,
          // quantity: this.quantity,
        });

        console.log("Item berhasil ditambahkan ke keranjang");
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    };

    return { addToCart };
  },
  data() {
    return {
      product: {},
      quantity: 1,
      notes: "",
      address: "",
      reviews: [
        {
          name: "Mamat Kemang",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 18, 2024",
          comment: "Great product! Highly recommended.",
        },
        {
          name: "Rudi Kayang",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 19, 2024",
          comment: "Another great product! Highly recommended.",
        },

        {
          name: "Jon Lenon",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 20, 2024",
          comment: "Excellent service and fast delivery. Thank you!",
        },
        {
          name: "Wang Wang",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 21, 2024",
          comment: "Impressive product! Loved it!",
        },
        {
          name: "Ali Kikir",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 22, 2024",
          comment: "Product exceeded my expectations. Very satisfied!",
        },
        {
          name: "Bobi Bibo",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 23, 2024",
          comment: "Great value for money. Highly recommended!",
        },
        {
          name: "Eva Kuning",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 24, 2024",
          comment: "Quick shipping and excellent packaging!",
        },
        {
          name: "Michael Running",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 25, 2024",
          comment: "Very happy with the purchase. Exactly as described!",
        },
        {
          name: "Sara Hijau",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 26, 2024",
          comment: "Highly recommended seller. Will definitely buy again!",
        },
        {
          name: "David Local",
          profilePicture: "https://via.placeholder.com/50",
          date: "March 27, 2024",
          comment: "Great customer service. Thank you for your assistance!",
        },
      ],
      categoryDescriptions: {
        "Perawatan Kulit": {
          openingProduct:
            "Our Hydrating Facial Moisturizer is specially formulated to provide intense hydration and nourishment to the skin.",
          features: [
            "Provides intense hydration and nourishment",
            "Restores elasticity and improves skin health",
            "Lightweight formula suitable for all skin types",
            "Absorbs quickly and leaves skin feeling soft and smooth",
          ],
          directions:
            "Apply a small amount of moisturizer to cleansed face and neck, morning and night. Gently massage into the skin using upward circular motions until fully absorbed. For best results, use after cleansing and toning.",
          ingredients:
            "Aqua (Water), Glycerin, Cetyl Alcohol, Glyceryl Stearate, Butyrospermum Parkii (Shea) Butter, Cocos Nucifera (Coconut) Oil, Aloe Barbadensis Leaf Juice, Tocopherol (Vitamin E), Retinyl Palmitate (Vitamin A), Panthenol (Vitamin B5), Sodium Hyaluronate, Allantoin, Phenoxyethanol, Ethylhexylglycerin, Parfum (Fragrance), Citric Acid.",
          cautionNote:
            "For external use only. Avoid contact with eyes. If irritation occurs, discontinue use and consult a healthcare practitioner. Keep out of reach of children.",
        },
        "Perawatan Rambut": {
          openingProduct:
            "Transform your hair with our Hair Care Essentials range. Whether you're looking to repair damaged hair, add volume, or enhance shine, we have the perfect products for you.",
          features: [
            "Repairs damaged hair",
            "Adds volume and enhances shine",
            "Wide range of products suitable for all hair types",
            "Nourishing formulas for healthy-looking hair",
          ],
          directions:
            "Apply shampoo to wet hair, lather, and rinse thoroughly. Follow with conditioner, focusing on the lengths and ends. For deep conditioning, use a hair mask once a week. Style as desired.",
          ingredients:
            "Aqua (Water), Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycol Distearate, Sodium Chloride, Dimethicone, Parfum (Fragrance), Citric Acid, Guar Hydroxypropyltrimonium Chloride, Sodium Benzoate, Sodium Hydroxide, Tetrasodium EDTA, Methylchloroisothiazolinone, Methylisothiazolinone.",
          cautionNote:
            "Avoid contact with eyes. If contact occurs, rinse thoroughly with water. Discontinue use if irritation occurs and consult a healthcare practitioner.",
        },
        "Make Up": {
          openingProduct:
            "Enhance your natural beauty with our Makeup Essentials collection. From flawless foundations to statement lipsticks, we offer a wide range of high-quality makeup products to help you achieve your desired look.",
          features: [
            "Wide range of makeup products",
            "Long-lasting formulas",
            "Pigmented and blendable",
            "Suitable for all skin tones",
          ],
          directions:
            "Apply makeup to cleansed and moisturized skin. Use brushes or applicators for precise application. Blend well for a seamless finish.",
          ingredients:
            "Please refer to individual product packaging for ingredient list.",
          cautionNote:
            "For external use only. Avoid direct contact with eyes. Discontinue use if irritation occurs and consult a healthcare practitioner.",
        },
        "Perawatan Kuku": {
          openingProduct:
            "Keep your nails looking their best with our Nail Care Essentials range. From strengthening treatments to vibrant polishes, we have everything you need to achieve salon-worthy nails at home.",
          features: [
            "Strengthens nails",
            "Provides vibrant colors",
            "Nourishing formulas for healthy nails",
            "Wide range of shades to choose from",
          ],
          directions:
            "Apply nail polish to clean, dry nails. Allow to dry completely between coats. Finish with a top coat for added shine and longevity.",
          ingredients:
            "Please refer to individual product packaging for ingredient list.",
          cautionNote:
            "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs and consult a healthcare practitioner.",
        },
        Parfum: {
          openingProduct:
            "Discover your signature scent with our Fragrance Essentials collection. From fresh florals to warm woody notes, we offer a diverse range of fragrances to suit every taste and occasion.",
          features: [
            "Diverse range of fragrances",
            "Long-lasting formulas",
            "Luxurious scents for every occasion",
            "Available in various sizes",
          ],
          directions:
            "Apply perfume to pulse points, such as wrists and neck. Allow the fragrance to dry naturally on the skin for optimal scent diffusion.",
          ingredients:
            "Please refer to individual product packaging for ingredient list.",
          cautionNote:
            "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs and consult a healthcare practitioner.",
        },
        Aksesoris: {
          openingProduct:
            "Complete your look with our Accessories Essentials range. From stylish sunglasses to chic jewelry, we have the perfect finishing touches to elevate any outfit.",
          features: [
            "Stylish and trendy designs",
            "Wide range of accessories to choose from",
            "High-quality materials",
            "Versatile pieces for any occasion",
          ],
          directions:
            "Style accessories according to personal preference and outfit choice. Mix and match pieces to create unique looks.",
          ingredients:
            "Our accessories are made from a variety of materials. Please refer to individual product descriptions for details.",
          cautionNote:
            "Accessories are not suitable for children under 3 years old due to small parts that may pose a choking hazard.",
        },
        Body: {
          openingProduct:
            "Pamper your body with our Body Care Essentials collection. From indulgent bath oils to nourishing body lotions, we offer a luxurious range of products to cleanse, moisturize, and rejuvenate your skin.",
          features: [
            "Luxurious body care products",
            "Enriched with natural ingredients",
            "Nourishes and hydrates the skin",
            "Leaves skin feeling soft and smooth",
          ],
          directions:
            "Apply body care products to clean, dry skin. Massage gently until fully absorbed. Use daily for best results.",
          ingredients:
            "Please refer to individual product packaging for ingredient list.",
          cautionNote:
            "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs and consult a healthcare practitioner.",
        },
      },
      selectedCategory: {},
    };
  },
  async created() {
    const id = this.$route.params.id;
    const result = await axios.get(`http://localhost:8000/api/products/${id}`);
    this.product = result.data;

    const category = this.getProductDescription(this.product.category);
    this.selectedCategory = { category };
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
    getProductDescription(categoryProduct) {
      if (
        categoryProduct &&
        this.categoryDescriptions.hasOwnProperty(categoryProduct)
      ) {
        return this.categoryDescriptions[categoryProduct];
      } else {
        return {
          openingProduct: "No Description",
          features: [],
          directions: "No Description",
          ingredients: "No Description",
          cautionNote: "No Description",
        };
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
