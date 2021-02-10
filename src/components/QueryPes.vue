<template>
  <div>
    <div role="dialog" tabindex="-1" class="modal fade" id="queryModel">
      <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">球探</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col align-self-center"><label style="color: var(--blue);">基本信息:</label>
                  <form style="font-size: 12px;"><label style="font-size: 12px;margin-right: 10px;">姓名<input type="text"
                                                                                                             class="form-control form-control-sm"
                                                                                                             autofocus
                                                                                                             style="margin-left: 3px;"
                                                                                                             v-model="name"/></label><label
                      style="font-size: 12px;margin-right: 10px;">位置<select class="form-control form-control-sm"
                                                                            style="margin-left: 3px;"
                                                                            v-model="position">
                    <optgroup label>
                      <option value selected>全部</option>
                      <option value="CF">CF</option>
                      <option value="SS">SS</option>
                      <option value="RWF">RWF</option>
                      <option value="LWF">LWF</option>
                      <option value="AMF">AMF</option>
                      <option value="CMF">CMF</option>
                      <option value="RMF">RMF</option>
                      <option value="LMF">LMF</option>
                      <option value="DMF">DMF</option>
                      <option value="LB">LB</option>
                      <option value="RB">RB</option>
                      <option value="CB">CB</option>
                      <option value="GK">GK</option>
                    </optgroup>
                  </select></label><label style="font-size: 12px;margin-right: 10px;">年龄<input type="number"
                                                                                               class="form-control form-control-sm"
                                                                                               v-model="age"
                                                                                               step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">身高(cm)<input type="number"
                                                                               class="form-control form-control-sm"
                                                                               v-model="height"
                                                                               step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">体重(kg)<input type="number"
                                                                               class="form-control form-control-sm"
                                                                               v-model="weight"
                                                                               step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">状态持续<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="form"
                                                                             step="1"/></label>
                    <label style="font-size: 12px;margin-right: 10px;">易受伤等级<input type="number"
                                                                                   class="form-control form-control-sm"
                                                                                   v-model="injuryResistance"
                                                                                   step="1"/></label><label
                        style="font-size: 12px;margin-right: 10px;">评分<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="score" step="1"/></label><label
                        style="font-size: 12px;margin-right: 10px;">等级<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="level" step="1"/></label><label
                        style="font-size: 12px;margin-right: 10px;">url<input type="text"
                                                                              class="form-control form-control-sm"
                                                                              v-model="url"/></label>
                    <label style="font-size: 12px;margin-right: 10px;">风格<select class="form-control form-control-sm"
                                                                                 v-model="style">
                      <optgroup label>
                        <option value>全部</option>
                        <option value="-">无风格</option>
                        <option value="Anchor Man">Anchor Man</option>
                        <option value="Box-to-Box">Box-to-Box</option>
                        <option value="Build Up">Build Up</option>
                        <option value="Classic No. 10">Classic No. 10</option>
                        <option value="Creative Playmaker">Creative Playmaker</option>
                        <option value="Cross Specialist">Cross Specialist</option>
                        <option value="Defensive Full-back">Defensive Full-back</option>
                        <option value="Defensive Goalkeeper">Defensive Goalkeeper</option>
                        <option value="Dummy Runner">Dummy Runner</option>
                        <option value="Extra Frontman">Extra Frontman</option>
                        <option value="Fox in the Box">Fox in the Box</option>
                        <option value="Full-back Finisher">Full-back Finisher</option>
                        <option value="Goal Poacher">Goal Poacher</option>
                        <option value="Hole Player">Hole Player</option>
                        <option value="Offensive Full-back">Offensive Full-back</option>
                        <option value="Offensive Goalkeeper">Offensive Goalkeeper</option>
                        <option value="Orchestrator">Orchestrator</option>
                        <option value="Prolific Winger">Prolific Winger</option>
                        <option value="Roaming Flank">Roaming Flank</option>
                        <option value="Target Man">Target Man</option>
                        <option value="The Destroyer">The Destroyer</option>
                      </optgroup>
                    </select></label></form>
                </div>
              </div>
              <div class="row">
                <div class="col"><label style="color: var(--blue);">进攻:</label>
                  <form><label style="font-size: 12px;margin-right: 10px;">进攻意识<input type="number"
                                                                                      class="form-control form-control-sm"
                                                                                      v-model="offensiveAwareness"
                                                                                      step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">射门<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="finishing"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">射门力量<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="kickingPower"
                                                                             step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">控球<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="ballControl"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">盘带<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="dribbling"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">紧密控球<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="tightPossession"
                                                                             step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">平衡<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="balance"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">头球<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="heading"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">跳跃<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="jump" step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">任意球<input type="number"
                                                                            class="form-control form-control-sm"
                                                                            v-model="placeKicking"
                                                                            step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">弧线<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="curl" step="1"/></label></form>
                </div>
              </div>
              <div class="row">
                <div class="col"><label style="color: var(--blue);">防守:</label>
                  <form><label style="font-size: 12px;margin-right: 10px;">防守意识<input type="number"
                                                                                      class="form-control form-control-sm"
                                                                                      v-model="defensiveAwareness"
                                                                                      step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">抢球<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="ballWinning"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">抢球积极性<input type="number"
                                                                              class="form-control form-control-sm"
                                                                              v-model="aggression"
                                                                              step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">地面传球<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="lowPass"
                                                                             step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">空中传球<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="loftedPass"
                                                                             step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">速度<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="speed" step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">加速<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="acceleration"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">体力<input type="number"
                                                                           class="form-control form-control-sm"
                                                                           v-model="stamina"
                                                                           step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">身体对抗<input type="number"
                                                                             class="form-control form-control-sm"
                                                                             v-model="physicalContact"
                                                                             step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">守门员意识<input type="number"
                                                                              class="form-control form-control-sm"
                                                                              v-model="gkAwareness"
                                                                              step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">守门员接球<input type="number"
                                                                              class="form-control form-control-sm"
                                                                              v-model="gkCatching"
                                                                              step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">守门员解围<input type="number"
                                                                              class="form-control form-control-sm"
                                                                              v-model="gkClearing"
                                                                              step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">守门员扑救<input type="number"
                                                                              class="form-control form-control-sm"
                                                                              v-model="gkReflexes"
                                                                              step="1"/></label><label
                      style="font-size: 12px;margin-right: 10px;">守门员臂展<input type="number"
                                                                              class="form-control form-control-sm"
                                                                              v-model="gkReach" step="1"/></label>
                  </form>
                </div>
              </div>
              <div class="row" style="margin-bottom: 15px;">
                <div class="col"><label style="color: var(--blue);">技能:</label>
                  <form>
                    <div class="form-row">
                      <div class="col"><label class="col-form-label" style="font-size: 12px;"><select
                          class="form-control form-control-sm" style="font-size: 14px;" v-model="skill">
                        <optgroup label>
                          <option value selected>不限</option>
                          <option value="-">技能待学习</option>
                          <option value="Acrobatic Clear">杂技般解围(凌空解围)</option>
                          <option value="Acrobatic Finishing">杂技般进球(凌空射门)</option>
                          <option value="Captaincy">队长</option>
                          <option value="Chip Shot Control">吊射</option>
                          <option value="Cross Over Turn">压步转弯</option>
                          <option value="Cut Behind &amp; Turn">向后切球并转身</option>
                          <option value="Dipping Shot">插入射门</option>
                          <option value="Double Touch">双触</option>
                          <option value="Fighting Spirit">战斗精神</option>
                          <option value="First-time Shot">接球并射门</option>
                          <option value="Flip Flap">牛尾巴</option>
                          <option value="Gamesmanship">蛊惑招</option>
                          <option value="GK High Punt">守门员踢高球</option>
                          <option value="GK Long Throw">守门员长距离投掷</option>
                          <option value="GK Low Punt">守门员踢低球</option>
                          <option value="GK Penalty Saver">守门员扑点球</option>
                          <option value="Heading">头球精度</option>
                          <option value="Heel Trick">脚后跟绝技</option>
                          <option value="Interception">拦截</option>
                          <option value="Knuckle Shot">落叶球射门</option>
                          <option value="Long Range Drive">远距离搓射</option>
                          <option value="Long Range Shooting">远距离射门</option>
                          <option value="Long Throw">大力手抛球</option>
                          <option value="Low Lofted Pass">低空(弧线)传球</option>
                          <option value="Man Marking">盯人(高级设置里触发)</option>
                          <option value="Marseille Turn">马赛回旋</option>
                          <option value="No Look Pass">不看球传球</option>
                          <option value="One-touch Pass">单触传球</option>
                          <option value="Outside Curler">外脚背传球或射门</option>
                          <option value="Penalty Specialist">点球专家</option>
                          <option value="Pinpoint Crossing">精确(弧线)横传</option>
                          <option value="Rabona">插花脚进行射门，传球，横传</option>
                          <option value="Rising Shots">截击射门，球先低轨迹后升高</option>
                          <option value="Scissors Feint">高速剪刀脚</option>
                          <option value="Scotch Move">内部弹起</option>
                          <option value="Sombrero">挑球</option>
                          <option value="Step On Skill control">踏球控制</option>
                          <option value="Super-sub">超级候补</option>
                          <option value="Through Passing">直塞球</option>
                          <option value="Track Back">压迫,前锋球员回追抢球</option>
                          <option value="Weighted Pass">加重传球，精准传球</option>
                        </optgroup>
                      </select></label></div>
                    </div>
                    <div class="form-row justify-content-start"><span
                        v-for="(skill,index) in skills" :key="index"
                        class="badge badge-primary" data-toggle="tooltip"
                        style="margin-right: 5px;margin-left: 5px;cursor:pointer;"
                        title="移除" @click="clear(index)">{{ skill }}</span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="col"><label style="color: var(--blue);">排序:</label>
                  <form><label style="font-size: 12px;margin-right: 10px;">字段排序:<select
                      class="form-control form-control-sm" v-model="order1">
                    <optgroup label="选择排序">
                      <option value="T1.HEIGHT" selected>身高(cm)</option>
                      <option value="T1.WEIGHT">体重(kg)</option>
                      <option value="T1.FORM">状态持续</option>
                      <option value="T2.OFFENSIVE_AWARENESS">进攻意识</option>
                      <option value="T2.LEVEL">等级</option>
                      <option value="T2.SCORE" selected>评分</option>
                      <option value="T2.FINISHING">射门</option>
                      <option value="T2.KICKING_POWER">射门力量</option>
                      <option value="T2.BALL_CONTROL">控球</option>
                      <option value="T2.DRIBBLING">盘带</option>
                      <option value="T2.TIGHT_POSSESSION">紧密控球</option>
                      <option value="T2.BALANCE">平衡</option>
                      <option value="T2.HEADING">头球</option>
                      <option value="T2.JUMP">跳跃</option>
                      <option value="T2.PLACEKICKING">任意球</option>
                      <option value="T2.CURL">弧线</option>
                      <option value="T2.DEFENSIVE_AWARENESS">防守意识</option>
                      <option value="T2.BALL_WINNING">抢球</option>
                      <option value="T2.AGGRESSION">抢球积极性</option>
                      <option value="T2.LOW_PASS">地面传球</option>
                      <option value="T2.LOFTED_PASS">空中传球</option>
                      <option value="T2.SPEED">速度</option>
                      <option value="T2.STAMINA">加速</option>
                      <option value="T2.ACCELERATION">体力</option>
                      <option value="T2.PHYSICAL_CONTACT">身体对抗</option>
                      <option value="T2.GK_AWARENESS">守门员意识</option>
                      <option value="T2.GK_CATCHING">守门员接球</option>
                      <option value="T2.GK_CLEARING">守门员解围</option>
                      <option value="T2.GK_REFLEXES">守门员扑救</option>
                      <option value="T2.GK_REACH">守门员臂展</option>
                    </optgroup>
                  </select></label><label style="font-size: 12px;margin-right: 20px;">升降序:<select
                      class="form-control form-control-sm " v-model="sort1">
                    <optgroup label="选择顺序">
                      <option value="DESC" selected>降序</option>
                      <option value="ASC">升序</option>
                    </optgroup>
                  </select></label><label style="font-size: 12px;margin-right: 10px;">字段排序:<select
                      class="form-control form-control-sm" v-model="order2">
                    <optgroup label="选择排序">
                      <option value="T1.HEIGHT" selected>身高(cm)</option>
                      <option value="T1.WEIGHT">体重(kg)</option>
                      <option value="T1.FORM">状态持续</option>
                      <option value="T2.OFFENSIVE_AWARENESS">进攻意识</option>
                      <option value="T2.LEVEL">等级</option>
                      <option value="T2.SCORE" selected>评分</option>
                      <option value="T2.FINISHING">射门</option>
                      <option value="T2.KICKING_POWER">射门力量</option>
                      <option value="T2.BALL_CONTROL">控球</option>
                      <option value="T2.DRIBBLING">盘带</option>
                      <option value="T2.TIGHT_POSSESSION">紧密控球</option>
                      <option value="T2.BALANCE">平衡</option>
                      <option value="T2.HEADING">头球</option>
                      <option value="T2.JUMP">跳跃</option>
                      <option value="T2.PLACEKICKING">任意球</option>
                      <option value="T2.CURL">弧线</option>
                      <option value="T2.DEFENSIVE_AWARENESS">防守意识</option>
                      <option value="T2.BALL_WINNING">抢球</option>
                      <option value="T2.AGGRESSION">抢球积极性</option>
                      <option value="T2.LOW_PASS">地面传球</option>
                      <option value="T2.LOFTED_PASS">空中传球</option>
                      <option value="T2.SPEED">速度</option>
                      <option value="T2.STAMINA">加速</option>
                      <option value="T2.ACCELERATION">体力</option>
                      <option value="T2.PHYSICAL_CONTACT">身体对抗</option>
                      <option value="T2.GK_AWARENESS">守门员意识</option>
                      <option value="T2.GK_CATCHING">守门员接球</option>
                      <option value="T2.GK_CLEARING">守门员解围</option>
                      <option value="T2.GK_REFLEXES">守门员扑救</option>
                      <option value="T2.GK_REACH">守门员臂展</option>
                    </optgroup>
                  </select></label><label style="font-size: 12px;margin-right: 20px;">升降序:<select
                      class="form-control form-control-sm" v-model="sort2">
                    <optgroup label="选择顺序">
                      <option value="DESC" selected>降序</option>
                      <option value="ASC">升序</option>
                    </optgroup>
                  </select></label></form>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-light" type="button" data-dismiss="modal">关闭</button>
            <button class="btn btn-primary" type="button" @click="search">搜索</button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary btn-sm" type="button" data-toggle="modal" data-target="#queryModel"
              style="background: var(--cyan);">球探
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QueryPes",
  data() {
    return {
      name: "",
      position: "",
      age: "",
      height: "",
      weight: "",
      form: "",
      score: "",
      level: "14",
      url: "",
      style: "",
      offensiveAwareness: "",
      finishing: "",
      kickingPower: "",
      ballControl: "",
      dribbling: "",
      tightPossession: "",
      balance: "",
      heading: "",
      jump: "",
      placeKicking: "",
      injuryResistance: "",
      curl: "",
      defensiveAwareness: "",
      ballWinning: "",
      aggression: "",
      lowPass: "",
      loftedPass: "",
      speed: "",
      stamina: "",
      acceleration: "",
      physicalContact: "",
      gkAwareness: "",
      gkCatching: "",
      gkClearing: "",
      gkReflexes: "",
      gkReach: "",
      order1: "T2.FINISHING",
      order2: "T2.SCORE",
      sort1: "DESC",
      sort2: "DESC",
      skill: "",
      skills: []
    };
  },
  watch: {
    skill: function () {
      this.skills.push(this.skill)
    }
  },
  methods: {
    search: function () {
      let queryJson = {
        name: this.name,
        position: this.position,
        age: this.age,
        height: this.height,
        weight: this.weight,
        form: this.form,
        score: this.score,
        level: this.level,
        injuryResistance: this.injuryResistance,
        url: this.url,
        style: this.style,
        offensiveAwareness: this.offensiveAwareness,
        finishing: this.finishing,
        kickingPower: this.kickingPower,
        ballControl: this.ballControl,
        dribbling: this.dribbling,
        tightPossession: this.tightPossession,
        balance: this.balance,
        heading: this.heading,
        jump: this.jump,
        placeKicking: this.placeKicking,
        curl: this.curl,
        defensiveAwareness: this.defensiveAwareness,
        ballWinning: this.ballWinning,
        aggression: this.aggression,
        lowPass: this.lowPass,
        loftedPass: this.loftedPass,
        speed: this.speed,
        stamina: this.stamina,
        acceleration: this.acceleration,
        physicalContact: this.physicalContact,
        gkAwareness: this.gkAwareness,
        gkCatching: this.gkCatching,
        gkClearing: this.gkClearing,
        gkReflexes: this.gkReflexes,
        gkReach: this.gkReach,
        currentPage: 1,
        pageSize: 100,
        orderBy: this.order1 + " " + this.sort1 + "," + this.order2 + " " + this.sort2,
        skills: this.skills
      }
      let jsonText = JSON.stringify(queryJson);
      this.$emit('sendToTable', jsonText)
    },
    clear: function (index) {
      this.skills.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>