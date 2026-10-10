-- テーブル作成
DROP TABLE IF EXISTS todo_info;

CREATE TABLE todo_info (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    email char(128) NOT NULL REFERENCES user_info(email),
    title char(128) NOT NULL,
    completed boolean NOT NULL,
    latest_access_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    delete_flg boolean NOT NULL DEFAULT FALSE
);

-- サンプルデータの登録
INSERT INTO todo_info (email, title, completed)
VALUES
    ('sample1@test.com', '買い物をする', FALSE),
    ('sample1@test.com', 'メールを確認する', TRUE),
    ('sample2@test.com', '資料を作成する', FALSE);

INSERT INTO todo_info (email, title, completed, delete_flg)
VALUES
    ('sample1@test.com', '削除済みのタスク', FALSE, TRUE);
