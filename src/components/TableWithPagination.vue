<template>
  <div class="row">
    <div class="col">
      <div class="table-responsive">
        <table class="table table-sm table-striped">
          <thead>
          <tr>
            <th v-for="(column,index) in columns" :key="index">{{ column }}</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(line,index) in lines" :key="index" :class="setLineClass(index)">
            <!--index为行，k为列-->
            <td v-for="(i,k) in line" :key="i" :class="setCellClass(index,k)">{{ lines[index][k] }}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <hr/>
      <nav class="d-flex justify-content-center">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
          <li class="page-item"><a class="page-link">1</a></li>
          <li class="page-item"><a class="page-link">2</a></li>
          <li class="page-item"><a class="page-link">3</a></li>
          <li class="page-item"><a class="page-link">4</a></li>
          <li class="page-item"><a class="page-link">5</a></li>
          <li class="page-item"><a class="page-link" aria-label="Next"><span aria-hidden="true">»</span></a></li>
        </ul>
      </nav>
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
      lineClassProperties: new Array()
    };
  },
  name: "TableWithPagination",
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
              // 自定义cell class规则
              if (obj[i] < 30) {
                // // 针对每个格子的值进行样式的判断
                // self.cellClassProperties[k][i] = "table-danger";
                // // 由格子的值判断行的样式
                // self.lineClassProperties[k] = "table-success";
              }
            }
            self.lines[k] = obj;
          }
        })
        .catch(function (e) {
          console.log(e);
        })
  },
  methods: {
    setCellClass: function (r, c) {
      return this.cellClassProperties[r][c];
    },
    setLineClass:function (r) {
      return this.lineClassProperties[r];
    }
  }
}
</script>

<style scoped src="../../static/css/simple_table/table.css">
</style>