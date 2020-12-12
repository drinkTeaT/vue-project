<template>
    <div>
        <hr style="opacity: 0;border-style: none;"/>
        <button class="btn btn-primary btn-sm" type="button" style="margin-right: 20px;">添加</button>
        <hr style="opacity: 0;border-style: none;"/>
        <div class="table-responsive">
            <table class="table table-sm table-striped">
                <thead>
                <tr>
                    <th v-for="(column,index) in columns" :key="index">{{column}}</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(line,index) in lines" :key="index" :class="setLineClass(index)">
                    <!--index为行，k为列-->
                    <td v-for="(i,k) in line" :key="i" :class="setCellClass(index,k)">
                        <label v-if="!lineIsEdit[index]">{{lines[index][k]}}</label>
                        <input v-else-if="columnType.get(k) == 'string'" type="text" v-bind:value="lines[index][k]"/>
                        <input v-else type="number" class="form-control-sm" v-bind:value="lines[index][k]"/>
                    </td>
                    <td>
                        <i class="typcn typcn-social-vimeo-circular" data-toggle="tooltip" style="color: var(--green);font-size: 25px;" title="保存数据" v-if="lineIsEdit[index]"></i>
                        <i class="typcn typcn-edit" data-toggle="tooltip" style="color: var(--blue);font-size: 25px;" title="编辑数据" v-if="!lineIsEdit[index]" @click="reverseEditStatus(index)"></i>
                        <i class="typcn typcn-delete" data-toggle="tooltip" style="color: var(--danger);font-size: 25px;" title="删除整行" v-if="!lineIsEdit[index]"></i>
                        <i class="typcn typcn-arrow-back-outline" data-toggle="tooltip" title="取消" style="color: var(--primary);font-size: 25px;" v-if="lineIsEdit[index]" @click="reverseEditStatus(index)"></i>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {
        props: ["url"],
        data() {
            return {
                columns: {},
                lines: {},
                cellClassProperties: new Array(),
                lineClassProperties: new Array(),
                lineIsEdit: new Array(),
                columnType: new Map()
            };
        },
        name: "TableWithEdit",
        created() {
            const self = this;
            axios
                .get(self.$props.url)
                .then(function (response) {
                    let tableDataList = response.data.data;
                    self.columns = new Set();
                    self.lines = new Array();
                    for (let k = 0; k < tableDataList.length; k++) {
                        let obj = new Object();
                        // obj，一行数据。i为每个格子的列标题，k为行
                        self.cellClassProperties[k] = new Object();
                        for (let i in tableDataList[k]) {
                            // 列去重
                            self.columns.add(i);
                            // 一行数据的单个格子，添加对象属性值即obj[i]
                            obj[i] = tableDataList[k][i];
                            // 添加列的类型，数字或文本
                            self.columnType.set(i, typeof obj[i])
                            // 自定义cell class规则
                            if (i == 'minSalary' && obj[i] > 15) {
                                // 针对每个格子的值进行样式的判断
                                self.cellClassProperties[k][i] = "table-danger";
                                // 由格子的值判断行的样式
                                self.lineClassProperties[k] = "table-success";
                            }
                        }
                        self.lines[k] = obj;
                        self.lineIsEdit[k] = false
                    }
                })
                .catch(function (e) {
                    console.log(e);
                })
        },
        methods: {
            setCellClass: function (r, c) {
                return this.cellClassProperties[r][c]
            },
            setLineClass: function (r) {
                return this.lineClassProperties[r]
            },
            reverseEditStatus: function (line) {
                this.lineIsEdit[line] = !this.lineIsEdit[line]
                this.$forceUpdate()
            }
        }
    }
</script>

<style scoped src="../../static/css/simple_table/table.css">
</style>
