<script setup lang="ts">
import type { AlbumModel } from '@/models/album.model';
import { AlbumService } from '@/services/album.service';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = Number.parseInt(route.params.id as any);

const album = ref<AlbumModel | null>(null);

AlbumService.getAlbumById(id).then(rsp => {
    album.value = rsp.data;
    console.log('Fetched album data:', album.value); 
});

function updateAlbum() {
    if (!album.value) {
        console.error('No album data available to update');
        return;
    }

    //Edit artist name and album name to be fixed
    album.value.albumName = album.value.albumName || 'Default Name';
    album.value.artist.artistName = album.value.artist.artistName || 'Unknown Artist';

    console.log('Updating album with data:', album.value);

    AlbumService.updateAlbum(id, album.value)
        .then(rsp => {
            console.log('Update response:', rsp.data);
            router.push({
                path: '/albums'
            });
        })
        .catch(error => {
            console.error('Error updating album:', error);
        });
}
</script>


<template>
    <h1 class="h3">Edit Album</h1>
    <RouterLink class="btn btn-primary mb-3 mt-2" to="/albums">
        <i class="fa-regular fa-circle-left"></i> Return To Albums
    </RouterLink>
    <div v-if="album">
        <div class="mb-3">
            <label for="id" class="form-label">ID:</label>
            <input type="number" class="form-control" id="id" v-model="album.albumId" disabled>
        </div>
        <div class="mb-3">
            <label for="image" class="form-label">Album Image:</label>
            <input type="text" class="form-control" id="image" v-model="album.albumImage">
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">Album Name:</label>
            <input type="text" class="form-control" id="name" v-model="album.albumName">
        </div>
        <div class="mb-3">
            <label for="genre" class="form-label">Album Genre:</label>
            <input type="text" class="form-control" id="genre" v-model="album.albumGenre">
        </div>
        <div class="mb-3">
            <label for="release" class="form-label">Release Date:</label>
            <input type="date" class="form-control" id="release" v-model="album.releaseDate">
        </div>
        <div class="mb-3">
            <label for="artist" class="form-label">Artist:</label>
            <input type="text" class="form-control" id="artist" v-model="album.artist.artistName">
        </div>
        <button type="button" class="btn btn-success" @click="updateAlbum">
            <i class="fa-solid fa-save"></i> Save Changes
        </button>
    </div>
</template>
