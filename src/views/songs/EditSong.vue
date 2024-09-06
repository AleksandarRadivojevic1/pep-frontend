<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { SongService } from '@/services/song.service';
import type { SongModel } from '@/models/song.model';
import { useRoute, useRouter } from 'vue-router';

const song = ref<SongModel | null>(null);
const route = useRoute();
const router = useRouter();

const songId = Number(route.params.id);


onMounted(async () => {
  try {
    const response = await SongService.getSongById(songId);
    if (response.data) {
      if (!response.data.album) {
        response.data.album = { albumId: 0 }; 
      }
      song.value = response.data;
    }
  } catch (error) {
    console.error('Error fetching song data:', error);
  }
});



async function updateSong() {
  if (song.value) {
    await SongService.updateSong(songId, song.value);
    router.push('/songs'); 
  }
}

async function deleteSong() {
  await SongService.deleteSong(songId);
  router.push('/songs');
}
</script>

<template>
  <div v-if="song" class="edit-song-form">
    <h1 class="h3">Edit Song</h1>
    <RouterLink class="btn btn-primary mb-3 mt-2" to="/songs">
        <i class="fa-regular fa-circle-left"></i> Return To Songs
    </RouterLink>
    <form @submit.prevent="updateSong">
      <div class="mb-3">
        <label for="songName" class="form-label">Song Name</label>
        <input type="text" id="songName" v-model="song.name" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="albumId" class="form-label">Album ID</label>
        <input type="number" id="albumId" v-model="song.album.albumId" class="form-control" />
      </div>
      <button type="submit" class="btn btn-success me-3">
        <i class="fa-solid fa-save"></i> Save Changes
      </button>
      <button type="button" class="btn btn-danger" @click="deleteSong">
        <i class="fa-solid fa-trash"></i>
      </button>
    </form>
  </div>
  <div v-else>
    Loading song details...
  </div>
</template>

<style scoped>
.edit-song-form {
  max-width: auto;
  margin: auto;
}
.edit-song-form {
  background-color: #2b0101;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(50, 49, 49, 0.1);

}
</style>
