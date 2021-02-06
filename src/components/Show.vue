<template>
  <div class="hello">

    <QueryPes @sendToTable="getQueryJson"></QueryPes>
    <table-with-edit dataUrl='http://localhost:8080/pesmaster/advanced-show'
                     :data=queryJson :fieldMap=fieldMap></table-with-edit>

  </div>

</template>

<script>

import TableWithEdit from "@/components/TableWithEdit";
import QueryPes from "./QueryPes";
// import SimpleTable from "@/components/SimpleTable";

export default {
  name: 'show',
  components: {QueryPes, TableWithEdit},
  data() {
    return {
      queryJson: '{"currentPage":1,"pageSize":100,"heading":"","speed":"","jump":"","finishing":"","acceleration":"","level":"14","url":"","orderBy":"T2.FINISHING DESC, T2.SCORE DESC"}',
      fieldMap: {"face":"","name":"名字","score":"评分","level":"等级","position":"位置","type":"类型","style":"风格","form":"状态持续性","offensiveAwareness":"进攻意识","finishing":"射门","kickingPower":"踢球力量","ballControl":"控球","dribbling":"盘带","tightPossession":"紧密控球","balance":"平衡","heading":"头球","jump":"跳跃","defensiveAwareness":"防守意识","ballWinning":"抢球","aggression":"抢球积极性","lowPass":"地面传球","loftedPass":"空中传球","placeKicking":"任意球","curl":"弧度","speed":"速度","acceleration":"加速","stamina":"体力","gkAwareness":"守门员意识","gkCatching":"守门员接球","gkClearing":"守门员解围","gkReflexes":"守门员扑救反应","gkReach":"守门员臂展","physicalContact":"身体对抗","age":"年龄","height":"身高(cm)","weight":"体重(kg)","strongerFoot":"常用脚","injuryResistance":"受伤等级","weakFootUsage":"弱势脚使用频率"}
    }
  },
  methods: {
    getQueryJson(query) {
      this.queryJson = query
    }
  }
}
</script>
