<!--
 * @Author: your name
 * @Date: 2021-06-23 12:01:55
 * @LastEditTime: 2021-07-24 10:48:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fcwz-ui/examples/docs/zh-CN/page-edit.md
-->

## PageEdit 可编辑的产品页

### 基本有法

:::demo

```html
<el-row>
  <el-col :span="12" class="test">
    <fc-photo-album
      :pageList="list"
      :scale="0.16"
      :frame="frame"
    ></fc-photo-album>
  </el-col>
</el-row>
<script>
  export default {
    methods: {
      test(index) {
        console.log(123, index);
      }
    },
    computed: {
      list() {
        const { pagesObj, pagesIds } = this.page_info;
        return pagesIds.map(id => pagesObj[id]);
      }
    },
    data() {
      return {
        frame: {
          bleed: [3, 3, 3, 3],
          border: [],
          output: '',
          productSize: {
            height: 2361,
            width: 4722
          },
          type: 'photo_album'
        },
        page_info: {
          id: '0-643',
          pagesObj: {
            '0-643_首页': {
              id: '0-643_首页',
              name: '首页',
              isFixed: true,
              layers: [
                {
                  id: '1_4724*2362_1',
                  fill: true,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 3033,
                      y: 416,
                      width: 1019,
                      height: 1529,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 1,
                      id: '1_4724*2362_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3508',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/28da06fc4c8b427c8__R172277.jpg',
                        photoId: '28da06fc4c8b427c8',
                        shape: 1,
                        fileName: '_R172277.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/28da06fc4c8b427c8__R172277.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 22:32:44',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 5.251710376282745,
                        y: 0,
                        width: 1029.5034207525655,
                        height: 1529,
                        initialW: 1029.5034207525655,
                        initialH: 1529,
                        invalid: true
                      }
                    }
                  ],
                  width: 4724,
                  height: 2362,
                  sucai: [
                    {
                      id: '51-1_4724*2362_1',
                      x: 1500,
                      y: 172,
                      width: 187,
                      height: 388,
                      title: '散文集',
                      type: 'sucai',
                      suolue_url:
                        'http://image.fangcunwuzao.com/phosee/sucai/common/1624594628_38853_568_suolue.jpg',
                      yuantu_url:
                        'http://image.fangcunwuzao.com/phosee/sucai/common/1624594628_38853_568.jpg'
                    }
                  ]
                }
              ],
              width: 4724,
              height: 2362,
              isPaper: true
            },
            '0-643_2': {
              id: '0-643_2',
              layers: [
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3508',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/28da06fc4c8b427c8__R172277.jpg',
                        photoId: '28da06fc4c8b427c8',
                        shape: 1,
                        fileName: '_R172277.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/28da06fc4c8b427c8__R172277.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 22:32:44',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 5.048460661345473,
                        y: 0,
                        width: 1022.096921322691,
                        height: 1518,
                        initialW: 1022.096921322691,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                },
                {
                  id: '1_2361*2361_5',
                  fill: false,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 745.7626624694592,
                      y: 587.6453780933343,
                      width: 875.5904237800906,
                      height: 1352.0756268730695,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 0,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3264',
                        naturalW: '4928',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/f7c3af14cd95405f8__R172424.jpg',
                        photoId: 'f7c3af14cd95405f8',
                        shape: 0,
                        fileName: '_R172424.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/f7c3af14cd95405f8__R172424.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/07/12 20:27:15',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 520.1224587994708,
                        y: 0,
                        width: 2041.3690837103206,
                        height: 1352.0756268730695,
                        initialW: 1536.9803921568628,
                        initialH: 1018,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                }
              ],
              width: 4722,
              height: 2361
            },
            '0-643_3': {
              id: '0-643_3',
              layers: [
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                },
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                }
              ],
              width: 4722,
              height: 2361
            },
            '0-643_4': {
              id: '0-643_4',
              layers: [
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                },
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 228.54820415879016,
                      y: 425.4631379962193,
                      width: 1913.553875236295,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 90,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 162.12145357575605,
                        width: 1518,
                        height: 2237.796782387807,
                        initialW: 1518,
                        initialH: 2237.796782387807,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                }
              ],
              width: 4722,
              height: 2361
            },
            '0-643_5': {
              id: '0-643_5',
              layers: [
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                },
                {
                  id: '2_2361*2361_149',
                  fill: false,
                  match: [0, 2, 0],
                  layer: [
                    {
                      x: 180,
                      y: 435,
                      width: 994,
                      height: 1490,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '2_2361*2361_1_2',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.367604824813327,
                        y: 0,
                        width: 1010.7352096496267,
                        height: 1490,
                        initialW: 1010.7352096496267,
                        initialH: 1490,
                        invalid: true
                      }
                    },
                    {
                      x: 1185,
                      y: 435,
                      width: 995,
                      height: 1490,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '2_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 7.867604824813327,
                        y: 0,
                        width: 1010.7352096496267,
                        height: 1490,
                        initialW: 1010.7352096496267,
                        initialH: 1490,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                }
              ],
              width: 4722,
              height: 2361
            },
            '0-643_6': {
              id: '0-643_6',
              layers: [
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                },
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                }
              ],
              width: 4722,
              height: 2361
            },
            '0-643_7': {
              id: '0-643_7',
              layers: [
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                },
                {
                  id: '1_2361*2361_23',
                  fill: false,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 416,
                      y: 421,
                      width: 1012,
                      height: 1518,
                      align: 0,
                      zIndex: 1,
                      type: 'photo',
                      shape: 1,
                      id: '1_2361*2361_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 8.864445720850085,
                        y: 0,
                        width: 1029.7288914417002,
                        height: 1518,
                        initialW: 1029.7288914417002,
                        initialH: 1518,
                        invalid: true
                      }
                    }
                  ],
                  width: 2361,
                  height: 2361,
                  sucai: []
                }
              ],
              width: 4722,
              height: 2361
            },
            '0-643_尾页': {
              id: '0-643_尾页',
              name: '尾页',
              isFixed: true,
              layers: [
                {
                  id: '1_4724*2362_1',
                  fill: true,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 671,
                      y: 416,
                      width: 1019,
                      height: 1529,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 1,
                      id: '1_4724*2362_1_1',
                      data: {
                        scale: 1,
                        naturalH: '3264',
                        naturalW: '4928',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/f7c3af14cd95405f8__R172424.jpg',
                        photoId: 'f7c3af14cd95405f8',
                        shape: 0,
                        fileName: '_R172424.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/f7c3af14cd95405f8__R172424.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/07/12 20:27:15',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 644.7450980392157,
                        y: 0,
                        width: 2308.4901960784314,
                        height: 1529,
                        initialW: 2308.4901960784314,
                        initialH: 1529,
                        invalid: true
                      }
                    }
                  ],
                  width: 4724,
                  height: 2362,
                  sucai: [
                    {
                      id: '52-1_4724*2362_1',
                      x: 2500,
                      y: 172,
                      width: 187,
                      height: 388,
                      title: '散文集',
                      type: 'sucai',
                      suolue_url:
                        'http://image.fangcunwuzao.com/phosee/sucai/common/1624594628_38853_568_suolue.jpg',
                      yuantu_url:
                        'http://image.fangcunwuzao.com/phosee/sucai/common/1624594628_38853_568.jpg'
                    }
                  ]
                }
              ],
              width: 4724,
              height: 2362,
              isPaper: true
            },
            '0-643_护封': {
              id: '0-643_护封',
              name: '护封',
              isFixed: true,
              layers: [
                {
                  id: '1_8835*2421_1',
                  fill: true,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 4632,
                      y: 129,
                      width: 2288,
                      height: 2164,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 0,
                      id: '1_8835*2421_1_4',
                      data: {
                        scale: 1,
                        naturalH: '3482',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/b19c9a61a7d94c41b__R172249.jpg',
                        photoId: 'b19c9a61a7d94c41b',
                        shape: 1,
                        fileName: '_R172249.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/b19c9a61a7d94c41b__R172249.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 20:59:37',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 604.4555461473328,
                        width: 2288,
                        height: 3372.9110922946657,
                        initialW: 2288,
                        initialH: 3372.9110922946657,
                        invalid: true
                      }
                    },
                    {
                      x: 670,
                      y: 1143,
                      width: 432,
                      height: 136,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 'logo',
                      id: '1_8835*2421_1_3'
                    },
                    {
                      x: 2843,
                      y: 1143,
                      width: 432,
                      height: 136,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 'logo',
                      id: '1_8835*2421_1_2'
                    },
                    {
                      x: 7733,
                      y: 1143,
                      width: 432,
                      height: 136,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 'logo',
                      id: '1_8835*2421_1_1'
                    }
                  ],
                  width: 8835,
                  height: 2421,
                  sucai: []
                }
              ],
              width: 8835,
              height: 2421,
              isPart: true,
              partId: 528,
              paper: {
                attribute_value_name: '木棉纯白艺术纸',
                attribute_value_id: 990
              },
              bleed: [3, 3, 3, 3],
              ridgeWidth: 29.5
            },
            '0-643_卡片': {
              id: '0-643_卡片',
              name: '卡片',
              isFixed: true,
              layers: [
                {
                  id: '1_709*2362_737079',
                  fill: true,
                  match: [0, 1, 0],
                  layer: [
                    {
                      x: 65,
                      y: 174,
                      width: 579,
                      height: 1894,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 1,
                      id: '1_709*2362_1_2',
                      data: {
                        scale: 1,
                        naturalH: '3508',
                        naturalW: '2362',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/28da06fc4c8b427c8__R172277.jpg',
                        photoId: '28da06fc4c8b427c8',
                        shape: 1,
                        fileName: '_R172277.jpg',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/28da06fc4c8b427c8__R172277.jpg?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/21 22:32:44',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 348.13226909920184,
                        y: 0,
                        width: 1275.2645381984037,
                        height: 1894,
                        initialW: 1275.2645381984037,
                        initialH: 1894,
                        invalid: true
                      }
                    },
                    {
                      x: 213,
                      y: 2112,
                      width: 284,
                      height: 100,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 'logo',
                      id: '1_709*2362_1_1'
                    }
                  ],
                  width: 709,
                  height: 2362,
                  sucai: []
                }
              ],
              width: 709,
              height: 2362,
              isPart: true,
              partId: 532,
              paper: {
                attribute_value_name: '木棉纯白艺术纸',
                attribute_value_id: 990
              },
              bleed: [3, 3, 3, 3]
            },
            '0-643_包装盒标签': {
              id: '0-643_包装盒标签',
              name: '包装盒标签',
              isFixed: true,
              layers: [
                {
                  id: '1_1890*2067_3',
                  fill: true,
                  match: [1, 0, 0],
                  layer: [
                    {
                      x: 0,
                      y: 0,
                      width: 1890,
                      height: 1071,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 0,
                      id: '1_1890*2067_1_3',
                      data: {
                        scale: 1,
                        naturalH: '4928',
                        naturalW: '3264',
                        rotate: 0,
                        photoUrl:
                          'phosee/undefined/21c5860caa5f4f779__R172275.JPG',
                        photoId: '21c5860caa5f4f779',
                        shape: 1,
                        fileName: '_R172275.JPG',
                        result:
                          'https://fcwz-paiban.phosee.cn/phosee/undefined/21c5860caa5f4f779__R172275.JPG?imageView2/2/w/800/h/800',
                        orientation: '',
                        date: '2021/06/20 21:41:48',
                        is_qiniu: 1,
                        company: 'admin',
                        x: 0,
                        y: 891.2647058823532,
                        width: 1890,
                        height: 2853.5294117647063,
                        initialW: 1890,
                        initialH: 2853.5294117647063,
                        invalid: true
                      }
                    },
                    {
                      x: 742,
                      y: 1177,
                      width: 406,
                      height: 120,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 'logo',
                      id: '1_1890*2067_1_2'
                    },
                    {
                      x: 742,
                      y: 1530,
                      width: 406,
                      height: 120,
                      type: 'photo',
                      align: 0,
                      zIndex: 1,
                      shape: 'logo',
                      id: '1_1890*2067_1_1'
                    }
                  ],
                  width: 1890,
                  height: 2067,
                  sucai: []
                }
              ],
              width: 1890,
              height: 2067,
              isPart: true,
              partId: 297,
              paper: null,
              bleed: [3, 3, 3, 3]
            }
          },
          pagesIds: [
            '0-643_包装盒标签',
            '0-643_卡片',
            '0-643_护封',
            '0-643_首页',
            '0-643_3',
            '0-643_4',
            '0-643_5',
            '0-643_2',
            '0-643_6',
            '0-643_7',
            '0-643_尾页'
          ],
          count: 8,
          addCount: 0,
          start: 3
        }
      };
    }
  };
</script>
<style scope>
  .test {
    padding: 50px;
    border: 1px solid red;
  }
</style>
```

:::
