<template>
  <el-image :src="src"
            fit="cover"
            :style="`width:${realWidth};height:${realHeight};`"
            :preview-src-list="realSrcList">
    <div slot="error"
         class="image-slot">
      <i class="el-icon-picture-outline"></i>
    </div>
  </el-image>
</template>

<script>


export default {
  name: "ImagePreview",
  props: {
    src: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 60
    },
    height: {
      type: [Number, String],
      default: 60
    }
  },
  computed: {
    realSrcList () {
      if (!this.src) return
      let real_src_list = this.src.split(",");
      let srcList = [];
      real_src_list.forEach(item => {
        srcList.push(item);
      });
      return srcList;
    },
    realWidth () {
      return typeof this.width == "string" ? this.width : `${this.width}px`;
    },
    realHeight () {
      return typeof this.height == "string" ? this.height : `${this.height}px`;
    }
  },
};
</script>

<style lang="scss" scoped>
.el-image {
	border-radius: 5px;
	background-color: #ebeef5;
	box-shadow: 0 0 5px 1px #ccc;
	::v-deep .el-image__inner {
		transition: all 0.3s;
		cursor: pointer;
		&:hover {
			transform: scale(1.2);
		}
	}
	::v-deep .image-slot {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		color: #909399;
		font-size: 30px;
	}
}
</style>
