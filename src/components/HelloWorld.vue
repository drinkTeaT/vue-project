<template>
    <div class="hello">
        <!--        https://examples.wenzhixin.net.cn/examples/bootstrap_table/data-->
<!--        <table-with-edit dataUrl="http://localhost:8088/boss/data/table/job"-->
<!--                         del-url="http://localhost:8088/boss/data/table/delete"-->
<!--                         save-url="http://localhost:8088/boss/data/table/updateOrInsert"></table-with-edit>-->
        <!--        <simple-table dataUrl="http://localhost:8088/boss/data/table/job"></simple-table>-->
      头球型
      <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/HEADING_CF'></table-with-edit>
      速度型
      <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/SPEED_CF'></table-with-edit>
      坦克型
      <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/TANK_CF'></table-with-edit>
      终结型
      <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/FINAL_SHOT_CF'></table-with-edit>
      敏捷型
      <table-with-edit dataUrl = 'http://pes.tacbin.club/pesmaster/show/SMART_CF'></table-with-edit>
    </div>

</template>

<script>

    import TableWithEdit from "@/components/TableWithEdit";
    // import SimpleTable from "@/components/SimpleTable";

    export default {
        name: 'HelloWorld',
        components: {TableWithEdit}
    }
</script>
