-- テーブル作成
DROP TABLE IF EXISTS user_info;

CREATE TABLE user_info (
    user_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email char(128) NOT NULL,
    user_name char(64) NOT NULL,
    password_hash text NOT NULL,
    latest_access_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    delete_flg boolean NOT NULL DEFAULT FALSE
);

-- サンプルデータの登録
INSERT INTO
    user_info (email, user_name, password_hash)
VALUES
    (
        'sample1@test.com',
        'sample user_name1',
        'abcdef'
    );

INSERT INTO
    user_info (email, user_name, password_hash)
VALUES
    (
        'sample2@test.com',
        'sample user_name2',
        'abcdef'
    );

INSERT INTO
    user_info (email, user_name, password_hash)
VALUES
    (
        'notLoginUser@test.com',
        'NotLoginuser_name',
        'abcdef'
    );

UPDATE
    user_info
SET
    latest_access_time = '2000-01-01 12:00:00'
WHERE
    email = 'sample2@test.com';

-- NotLoginUserの削除フラグを立てる
UPDATE
    user_info
SET
    delete_flg = TRUE
WHERE
    email = 'notLoginUser@test.com';
