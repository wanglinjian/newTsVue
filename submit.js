模拟数据
const formItems = data.data.case.formData.formItems || [];

/* 提交数据 */
const params = {
  caseId: '',
  originalData: {}, 
}

formItems.forEach(item => {
  if (item.formItemId === 'image_upload-1679307507021') {
    params.originalData[item.formItemId] = '图片数组数据';
  } else params.originalData[item.formItemId] = item.value;
})
