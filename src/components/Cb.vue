<template>
  <div class="hello">


    头球型后卫
    <table-with-edit dataUrl = 'http://localhost:8080/pesmaster/show/HEADING_CB'></table-with-edit>

    防守型后卫
    <table-with-edit dataUrl = 'http://localhost:8080/pesmaster/show/DEFENDING_CB'></table-with-edit>

    传中后卫
    <table-with-edit dataUrl = 'http://localhost:8080/pesmaster/show/CROSSING_CB'></table-with-edit>
  </div>

</template>

<script>

import TableWithEdit from "@/components/TableWithEdit";
// import SimpleTable from "@/components/SimpleTable";

export default {
  name: 'Cb',
  components: {TableWithEdit}
}
</script>
