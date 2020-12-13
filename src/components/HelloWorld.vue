<template>
    <div class="hello">
        <!--        https://examples.wenzhixin.net.cn/examples/bootstrap_table/data-->
        <table-with-edit dataUrl="http://localhost:8088/boss/data/table/job"
                         del-url="http://localhost:8088/boss/data/table/delete"
                         save-url="http://localhost:8088/boss/data/table/updateOrInsert"></table-with-edit>
        <!--        <simple-table dataUrl="http://localhost:8088/boss/data/table/job"></simple-table>-->
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
