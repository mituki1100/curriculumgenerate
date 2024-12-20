function selectCategory() {
    const form = document.getElementById("categoryForm");
    const selectedCategory = form.category.value;
    const detailForm = document.getElementById("detailForm");
    const detailOptions = document.getElementById("detailOptions");

    if (!selectedCategory) {
        alert("カテゴリーを選択してください。");
        return;
    }

    // カテゴリーに応じた詳細選択肢を生成
    let options = "";
    if (selectedCategory === "studyMethod") {
        options = `
            <label><input type="radio" name="detail" value="math"> 数学</label><br>
            <label><input type="radio" name="detail" value="english"> 英語</label><br>
            <label><input type="radio" name="detail" value="science"> 理科</label><br>
        `;
    } else if (selectedCategory === "AbouttheExam") {
        options = `
            <label><input type="radio" name="detail" value="jhsExam"> 中学受験</label><br>
            <label><input type="radio" name="detail" value="hsExam"> 高校受験</label><br>
        `;
    }else if (selectedCategory === "examStrategy") {
        options = `
            <label><input type="radio" name="detail" value="midterm"> 中間テスト</label><br>
            <label><input type="radio" name="detail" value="final"> 期末テスト</label><br>
            <label><input type="radio" name="detail" value="thefinal"> 学年末テスト</label><br>
        `;
    } else {
        options = `<p>詳細選択は必要ありません。</p>`;
    }

    // 詳細選択肢を表示
    detailOptions.innerHTML = options;
    detailForm.style.display = "block";
}

function generateTemplate() {
    const categoryForm = document.getElementById("categoryForm");
    const selectedCategory = categoryForm.category.value;
    const detailForm = document.getElementById("detailForm");
    const selectedDetail = detailForm.detail ? detailForm.detail.value : null;

    const outputBox = document.getElementById("outputBox");
    const generatedTextElem = document.getElementById("generatedText");

    let generatedText = "";

    // テンプレート生成
    if (selectedCategory === "classObservation") {
        generatedText = "生徒は今日の授業で積極的に質問をし、理解を深めました。";
    } else if (selectedCategory === "studyMethod") {
        if (selectedDetail === "math") {
            generatedText = "計算問題を毎日10問解き、間違い直しを徹底しましょう。";
        } else if (selectedDetail === "english") {
            generatedText = "単語帳を使い、1日に10個の単語を覚えるペースを維持しましょう。";
        } else if (selectedDetail === "science") {
            generatedText = "重要な公式をまとめ、実験の手順を復習するのがおすすめです。";
        } else {
            alert("詳細を選択してください。");
            return;
        }
    } else if (selectedCategory === "examStrategy") {
        if (selectedDetail === "midterm") {
            generatedText = "範囲表を確認し、主要単元に重点を置いて復習しましょう。";
        } else if (selectedDetail === "final") {
            generatedText = "過去問を解いて時間配分を確認し、弱点を補強しましょう。";
        } else {
            alert("詳細を選択してください。");
            return;
        }
    } else {
        alert("テンプレートを選択してください。");
        return;
    }

    // 出力ボックスにテンプレートを表示
    generatedTextElem.innerText = generatedText;
    outputBox.style.display = "block";
}

function copyTemplate() {
    const generatedText = document.getElementById("generatedText").innerText;

    if (generatedText) {
        navigator.clipboard.writeText(generatedText).catch(() => {
            console.error("コピーに失敗しました。");
        });
    }
}
