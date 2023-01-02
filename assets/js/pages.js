const dashboard = document.getElementById("data-renderd");
const information = document.getElementById("data-renderd");
const totalSales = document.getElementById("data-renderd");

function dashboardPage() {
	dashboard.innerHTML = `<div class="dashboard-section">
    <h1>This week Best Breed</h1>
    <div class="card-cows">
        <div class="breed-card">
            <div class="cow-img">
                <img src="./assets/images/Ayrshire.jpg" alt="" />
            </div>
            <div class="container-card">
                <div class="empty-card"></div>
                <div class="text-element">
                    <div class="icons-elements">
                        <span class="material-symbols-rounded">
                            arrow_drop_up
                        </span>
                        <p><span> 40%</span> Litres</p>
                    </div>
                    <p>Ayrshire</p>
                    <h6>Health Status: <span>Healthy</span></h6>
                </div>
            </div>
        </div>
        <div class="breed-card">
            <div class="cow-img">
                <img src="./assets/images/Jersey.jpg" alt="" />
            </div>
            <div class="container-card">
                <div class="empty-card"></div>
                <div class="text-element">
                    <div class="icons-elements">
                        <span class="material-symbols-rounded">
                            arrow_drop_up
                        </span>
                        <p><span> 16%</span> Litres</p>
                    </div>
                    <p>Jersey</p>
                    <h6>Health Status: <span>Healthy</span></h6>
                </div>
            </div>
        </div>
        <div class="breed-card">
            <div class="cow-img">
                <img src="./assets/images/Brown-Swiss.jpg" alt="" />
            </div>
            <div class="container-card">
                <div class="empty-card"></div>
                <div class="text-element">
                    <div class="icons-elements">
                        <span class="material-symbols-rounded">
                            arrow_drop_up
                        </span>
                        <p><span> 30%</span> Litres</p>
                    </div>
                    <p>Brown-Swiss</p>
                    <h6>Health Status: <span>Healthy</span></h6>
                </div>
            </div>
        </div>
    </div>
</div>`;
}
function productionPage() {
	information.innerHTML = `<div class="dashboard-section">
    <h1>Production Report</h1>
</div>
<div class="production-section">
    <div class="empty-div">
        <label for="Enter ">Buying Rate</label>
        <input id="buying" type="text" placeholder="Ksh. " />
        <label for="Enter ">Days</label>
        <input id="days" type="text" placeholder="Number of Days" />
        <button onclick="submitInputs()" class="income-rate">
            Income Rate
        </button>
    </div>
    <button id="show-total" onclick="totalProduction()">
        Total Production
    </button>
</div>
<div id="test">
    <div class="production-data-day">
        <div id="table-container">
            <table>
                <tr>
                    <th>Shed Letter</th>

                    <th>Numbers of Litres</th>

                    <th>Duration</th>
                </tr>
            </table>
        </div>

        <div class="sum-production">
            <div class="emty"></div>
            <div class="total">
                Total production in Litres:
                <span id="prod-total">0</span>
            </div>
        </div>
        <div id="time-div"></div>
    </div>
</div>`;
}

function salesInYears() {
	totalSales.innerHTML = `<div class="dashboard-section">
    <h1>Production Report</h1>
</div>
<div class="production-section">
    <div class="empty-div">
        <label for="Enter ">Buying Rate</label>
        <input id="buying" type="text" placeholder="Ksh. " />
        
        <button onclick="submitInputs()" class="income-rate">
            Income Rate
        </button>
    </div>
    <button id="show-total" onclick="monthlySalesIncome()">
        Production
    </button>
</div>
<div id="test">
    <div class="production-data-day">
        <div id="table-container">
            <table>
                <tr>
                    <th>Months</th>

                    <th>Price In KSH</th>

                    <th>Rates</th>
                </tr>
            </table>
        </div>

        <div class="sum-production">
            <div class="emty"></div>
            <div class="total">
                Total Revenue in Year:
                <span id="prod-total">0</span>
            </div>
        </div>
        <div id="time-div"></div>
    </div>
</div>`;
}
