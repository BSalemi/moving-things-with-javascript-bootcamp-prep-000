const app = "I don't do much."

var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
var leftNumbers = dodger.style.left.replace('px','');
var left = parseInt(leftNumbers, 10);
if(left > 0) {
dodger.style.left = `${left-1}px` }}

function moveDodgerRight() {
var rightNumbers = dodger.style.left.replace('px','');
var right = parseInt(rightNumbers, 10)-40;
if(right > 0) {
dodger.style.right = `${right-1}px` }}

$(document).on('keydown', function(e) {
if(e.which === 39) {
moveDodgerRight() }
else if(e.which === 37) { 
moveDodgerLeft() }});