gdjs.snake_95alignment_95sceneCode = {};
gdjs.snake_95alignment_95sceneCode.GDNewBBTextObjects1= [];
gdjs.snake_95alignment_95sceneCode.GDNewBBTextObjects2= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects1= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595book_9595sequenceObjects1= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595book_9595sequenceObjects2= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene2Objects1= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene2Objects2= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene3Objects1= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene3Objects2= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595geneObjects1= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595geneObjects2= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects2= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene3Objects1= [];
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene3Objects2= [];


gdjs.snake_95alignment_95sceneCode.eventsList0 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList1 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList3 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList4 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList5 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList6 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList7 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList8 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList9 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList10 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList11 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList12 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList13 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList14 = function(runtimeScene) {

};gdjs.snake_95alignment_95sceneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.snake_95alignment_95sceneCode.GDNewBBTextObjects1);
{for(var i = 0, len = gdjs.snake_95alignment_95sceneCode.GDNewBBTextObjects1.length ;i < len;++i) {
    gdjs.snake_95alignment_95sceneCode.GDNewBBTextObjects1[i].setBBText("Bravo!!!!" + gdjs.evtTools.string.newLine() + "Tu as séquencé l'ADN suivant:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) + "\"" + gdjs.evtTools.string.newLine() + "Trouvez votre séquence dans les gènes suivants:");
}
}}

}


{



}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10362236);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(8).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10364036);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(9).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10365524);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(10).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("snake_random_gene1"), gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10367148);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(11).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}{for(var i = 0, len = gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2.length ;i < len;++i) {
    gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2[i].setBBText("Gene 1:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) + "\"");
}
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("snake_random_gene1"), gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10369268);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(12).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}{for(var i = 0, len = gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2.length ;i < len;++i) {
    gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2[i].setBBText("Gene1:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) + "\"   ");
}
}}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(11).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString("\"");
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10373892);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(8).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10375412);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(9).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10376932);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(10).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10378452);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(11).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("snake_random_gene2"), gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10379972);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(12).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}{for(var i = 0, len = gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene2Objects2.length ;i < len;++i) {
    gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene2Objects2[i].setBBText("Gene 2:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) + "\"   ");
}
}}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(8).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(9).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(11).setString("\"");
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString("\"");
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10341276);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(8).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10327772);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(9).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10371484);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(10).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10338044);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(11).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}}
}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) + 1;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("snake_random_gene3"), gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene3Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10323252);
}
if (isConditionTrue_0)
{
{runtimeScene.getGame().getVariables().getFromIndex(12).concatenateString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7).getChild(gdjs.randomInRange(0, 3))));
}{for(var i = 0, len = gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene3Objects2.length ;i < len;++i) {
    gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene3Objects2[i].setBBText("Gene 3:" + gdjs.evtTools.string.newLine() + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)) + "\"   " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) + "\"   ");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("snake_button_gene2"), gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1.length;i<l;++i) {
    if ( gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1[k] = gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1[i];
        ++k;
    }
}
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "snake_final_scene", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.snake_95alignment_95sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.snake_95alignment_95sceneCode.GDNewBBTextObjects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDNewBBTextObjects2.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene1Objects2.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595book_9595sequenceObjects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595book_9595sequenceObjects2.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene2Objects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene2Objects2.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene3Objects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595random_9595gene3Objects2.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595geneObjects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595geneObjects2.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene2Objects2.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene3Objects1.length = 0;
gdjs.snake_95alignment_95sceneCode.GDsnake_9595button_9595gene3Objects2.length = 0;

gdjs.snake_95alignment_95sceneCode.eventsList15(runtimeScene);

return;

}

gdjs['snake_95alignment_95sceneCode'] = gdjs.snake_95alignment_95sceneCode;
