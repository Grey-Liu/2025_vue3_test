import { ref } from 'vue'
import { defineStore } from 'pinia'

import albums  from '@/assets/albums.json'

export const useAlbumsStore = defineStore('albums',()=>{
  const albumslist = ref(albums)
  // console.log(list);
  
  return {albumslist}
})