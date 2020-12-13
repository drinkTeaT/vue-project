<template>
    <div>
        <hr style="opacity: 0;border-style: none;"/>
        <button class="btn btn-primary btn-sm" type="button" style="margin-right: 20px;" @click="addRow()">添加</button>
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
                    <!--index为行，k为列标题-->
                    <td v-for="(i,k) in line" :key="i" :class="setCellClass(index,k)">
                        <label v-if="k == 'id'">{{lines[index][k]}}</label>
                        <img v-else-if="columnType.get(k) == 'string' && validateImage(lines[index][k])"
                              :src="lines[index][k]" style="width: 35px;height: 35px;"/>
                        <label v-else-if="!lineIsEdit[index]">{{lines[index][k]}}</label>
                        <input v-else-if="columnType.get(k) == 'string'" type="text" v-model="lines[index][k]"/>
                        <input v-else type="number" class="form-control-sm" v-model="lines[index][k]"/>
                    </td>
                    <td>
                        <i class="typcn typcn-arrow-back-outline" data-toggle="tooltip" title="取消"
                           style="color: var(--primary);font-size: 25px;cursor:pointer;" v-if="lineIsEdit[index]"
                           @click="reverseEditStatus(index)"></i>
                        <i class="typcn typcn-social-vimeo-circular" data-toggle="tooltip"
                           style="color: var(--green);font-size: 25px;cursor:pointer;" title="保存数据"
                           v-if="lineIsEdit[index]" @click="saveRow(lines[index],index)"></i>
                        <i class="typcn typcn-edit" data-toggle="tooltip"
                           style="color: var(--blue);font-size: 25px;cursor:pointer;" title="编辑数据"
                           v-if="!lineIsEdit[index]" @click="reverseEditStatus(index)"></i>
                        <i class="typcn typcn-delete" data-toggle="tooltip"
                           style="color: var(--danger);font-size: 25px;cursor:pointer;" title="删除整行"
                           v-if="!lineIsEdit[index]" @click="deleteRow(lines[index],index)"></i>
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
        props: ["dataUrl", "saveUrl", "delUrl"],
        data() {
            return {
                columns: {},
                lines: {},
                lineCellClassProperties: new Array(),
                lineClassProperties: new Array(),
                lineIsEdit: new Array(),
                columnType: new Map()
            };
        },
        name: "TableWithEdit",
        mounted() {
            const self = this;
            axios
                .get(self.$props.dataUrl)
                .then(function (response) {
                    let tableDataList = response.data.data;
                    self.columns = new Set();
                    self.lines = new Array();
                    for (let k = 0; k < tableDataList.length; k++) {
                        let obj = new Object();
                        // obj，一行数据。i为每个格子的列标题，k为行
                        let lineCellObj = new Object();
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
                                lineCellObj[i] = "table-danger";
                                // 由格子的值判断行的样式
                                self.lineClassProperties[k] = "table-success";
                            }
                        }
                        self.lines[k] = obj;
                        self.lineIsEdit[k] = false
                        self.lineCellClassProperties[k] = lineCellObj
                    }
                })
                .catch(function (e) {
                    console.log(e);
                })
        },
        methods: {
            setCellClass: function (r, c) {
                return this.lineCellClassProperties[r][c]
            },
            setLineClass: function (r) {
                return this.lineClassProperties[r]
            },
            reverseEditStatus: function (line) {
                this.lineIsEdit[line] = !this.lineIsEdit[line]
                this.$forceUpdate()
            },
            addRow: function () {
                let row = new Object()
                let old = this.lines[0]
                for (let i in old) {
                    row[i] = null
                }
                this.lines.unshift(row)
                this.lineCellClassProperties.unshift(new Object())
                this.lineIsEdit.unshift(true)
                this.lineClassProperties.unshift(new Object())
            },
            deleteRow: function (line, index) {
                if (line.id == null || line.id == '') {
                    this.lines.splice(index, 1)
                    this.lineCellClassProperties.splice(index, 1)
                    this.lineIsEdit.splice(index, 1)
                    this.lineClassProperties.splice(index, 1)
                } else {
                    // ajax请求删除
                    let param = new URLSearchParams();
                    const self = this;
                    param.append('id', line.id);
                    axios
                        .post(self.$props.delUrl, param)
                        .then(function (isSuccess) {
                            if (isSuccess) {
                                self.lines.splice(index, 1)
                                self.lineCellClassProperties.splice(index, 1)
                                self.lineIsEdit.splice(index, 1)
                                self.lineClassProperties.splice(index, 1)
                            } else {
                                alert("删除失败！")
                            }
                        })
                }
            },
            saveRow: function (line, index) {
                const self = this;
                // ajax请求删除
                axios
                    .post(self.$props.saveUrl, line)
                    .then(function (response) {
                        if (response.status == 200 && response.data.success) {
                            self.lines[index] = response.data.data[0]
                            self.lineIsEdit[index] = false
                            self.$forceUpdate()
                        } else {
                            alert("保存失败！可能原因是没有该行没有值。")
                        }
                    }).catch(function () {
                    alert("保存失败！可能原因是该行没有值。")
                })
            },
            validateImage: function (url) {
                return url.match(/\.(jpg|png|gif)/g)
            }
        }
    }
</script>

<style scoped src="../../static/css/simple_table/table.css">
</style>
