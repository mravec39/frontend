<template>
  <div class="px-4 py-4 textOnTop text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">Forum</h1>
  </div>
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
      </svg>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0 text-start">List group item heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">now</small>
      </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
      </svg>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0 text-start">Another title here</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph that goes a little longer so it wraps to a new line.</p>
        </div>
        <small class="opacity-50 text-nowrap">3d</small>
      </div>
    </a>
    <a href="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
        <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
      </svg>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0 text-start">Third heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "PcPartPickerForumView",

}
</script>



<style scoped lang="scss">
.offcanvas-body{
  align-items: center;
}

.textOnTop {
  padding-top: 5px;
  background-color: darkgrey;

}
.list-group {
  padding-top: 30px;
  padding-right: 250px;
  padding-left: 250px;
}
.bi-chat-left-fill {
  padding-top: 10px;
}


</style>