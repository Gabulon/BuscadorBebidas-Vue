import { ref, reactive} from 'vue';
import { defineStore } from 'pinia';
import APIService from '../services/APIService';

export const useBebidasStore = defineStore('bebidas', () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre:' ',
    categoria: ''
  })

  const fetchCategorias = async () => {
    const { data: { drinks } } = await APIService.obtenerCategorias()
    categorias.value = drinks;
  };

  function obtenerRecetas(){
    console.log('consultando API..')
  }
  return {
    categorias,
    fetchCategorias,
    busqueda,
    obtenerRecetas
  };
});
