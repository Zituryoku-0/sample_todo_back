-- テーブル作成
DROP TABLE IF EXISTS userInfo;

CREATE TABLE userInfo (
    userId char(32) NOT NULL,
    userEmail char(128) NOT NULL,
    userName char(64) NOT NULL,
    userPassword text NOT NULL,
    latest_access_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    delete_flg boolean NOT NULL DEFAULT FALSE,
    PRIMARY KEY (userId)
);

-- サンプルデータの登録
INSERT INTO
    userInfo (userId, userEmail, userName, userPassword)
VALUES
    (
        'sampleUserId1',
        'sample1@test.com',
        'sample UserName1',
        'abcdef'
    );

INSERT INTO
    userInfo (userId, userEmail, userName, userPassword)
VALUES
    (
        'sampleUserId2',
        'sample2@test.com',
        'sample UserName2',
        'abcdef'
    );

INSERT INTO
    userInfo (userId, userName, userPassword)
VALUES
    (
        'NotLoginUserId',
        'notLoginUser@test.com',
        'NotLoginUserName',
        'abcdef'
    );

UPDATE
    userInfo
SET
    latest_access_time = '2000-01-01 12:00:00'
WHERE
    userId = 'sampleUserId2';

-- NotLoginUserの削除フラグを立てる
UPDATE
    userInfo
SET
    delete_flg = TRUE
WHERE
    userId = 'NotLoginUserId';