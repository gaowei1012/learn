
const LearnModal = require('../db/mysql')

exports.addVocabulary = async (ctx, next) => {
    let {vocabulary_info} = ctx.request.body;
    let vocabulary_type = 0; // 默认设置为0
    let create_at = new Date()

    if (vocabulary_info==null||vocabulary_info==undefined) {
        ctx.body = {
            code:-2,
            message: 'ERROR',
            data: '必填字段不能为空'
        }
    } else {
        await LearnModal.insertVocabulary([vocabulary_info, vocabulary_type, create_at])
            .then(ret => {
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    data: [ret]
                }
            })
            .catch(err => {
                ctx.body = {
                    code:-1,
                    message: 'ERROR',
                    data: `插入失败，请检查: ${err}`
                }
            })
    }

    await next()
}

exports.getVocabulary = async (ctx, next) => {

    await LearnModal.findVocabulary()
        .then(ret => {
            ctx.body = {
                code: 1,
                message: 'OK',
                data: [ret]
            }
        })
        .catch(err => {
            ctx.body = {
                coed: -1,
                message: 'ERROR',
                data: `查询失败：${err}`
            }
        })
    
    await next()
}

exports.updateVocabulary = async (ctx, next) => {
    let vocabulary_type = 1;
    let {id} = ctx.request.body;
    if (id == undefined || id == null) {
        ctx.body = {
            code:-2,
            message: 'ERROR',
            data: '必填字段不能为空'
        }
    } else {
        await LearnModal.updateVocabulary(vocabulary_type, id)
            .then(ret => {
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    data: '更新成功'
                }
            })
            .catch(err => {
                ctx.body = {
                    code: 1,
                    message: 'OK',
                    data: `更新失败: ${err}`
                }
        })
    }

    await next()
}