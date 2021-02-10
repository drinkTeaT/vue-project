<template>
  <div class="hello">

    助攻型中场
    <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/PASS_CMF'></table-with-edit>

    盘带型中场
    <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/DRIBBLING_CMF'></table-with-edit>

    防守型中场
    <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/DEFEND_CMF'></table-with-edit>
  </div>

</template>

<script>

import TableWithEdit from "@/components/TableWithEdit";
// import SimpleTable from "@/components/SimpleTable";

export default {
  name: 'Cmf',
  components: {TableWithEdit}
}
</script>
