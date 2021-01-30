<template>
  <div class="hello">


    <table-with-edit dataUrl='http://localhost:8080/pesmaster/advanced-show' data='{"currentPage":1,"pageSize":100,"lowPass":"93","loftedPass":"93","heading":"","speed":"","jump":"","finishing":"","acceleration":"","form":6,"level":"14","url":"","orderBy":"FINISHING DESC, SCORE DESC","fields":["lowPass","loftedPass","style","position","level","type","age","name","score","face","finishing","kickingPower","url","heading","jump","speed","acceleration"]}'></table-with-edit>

  </div>

</template>

<script>

import TableWithEdit from "@/components/TableWithEdit";
// import SimpleTable from "@/components/SimpleTable";

export default {
  name: 'show',
  components: {TableWithEdit}
}
</script>
