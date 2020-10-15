const vocabulary = `
    create table if not exists vocabulary(
        id INT NOT NULL AUTO_INCREMENT,
        vocabulary_info VARCHAR(100) NOT NULL COMMENT '词汇',
        vocabulary_type VARCHAR(50) NOT NULL COMMENT '状态',
        create_at VARCHAR(100) NOT NULL COMMENT '用户创建时间',
        PRIMARY KEY(id)
    ) character set = utf8;
`

module.exports = {
    vocabulary
}
