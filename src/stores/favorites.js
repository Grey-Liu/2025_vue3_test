import { ref } from 'vue'
import { defineStore } from 'pinia'
// 可以不用做到local storage

export const useFavoriteStore = defineStore('favoriteStore', () => {
  const favoriteslist = ref([])

  // 任務8. 加入我的最愛
  const addFav = (target) => {
    console.log(target);
    favoriteslist.value.push(target)
    console.log(favoriteslist.value);
    
  }

  // 移除我的最愛
  const removeFav = (target) => {
    const targetID = target && target.id? target.id : null
    if (!targetID) return

    const idx = favoriteslist.value.findIndex(fav => fav.id == targetID)
    if (idx >= 0){
      favoriteslist.value.splice(idx, 1)
    }
  }

  return { favoriteslist, addFav, removeFav }
})
